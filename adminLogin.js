var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');

var router = require('express').Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zen');
var User = require('./models/User.js');

var hash = function(password) {
	return crypto.createHash('sha512').update(password).digest('hex');
};

passport.use(new LocalStrategy(function(username, password, done) {
	var user = User.findOne({
        username: username,
        passwordHash: hash(password)
    }, function(err, user) {
    	if(err) {
    		return done(err);
    	}

    	if(user) {
    		console.log("user found "  + user);
	        done(null, user);
	    } else {
	    	console.log("wrong pass "  + user);
	        done(null, false);
	    }
    });
}));

passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Middleware configuration
router.use(bodyParser.urlencoded({exteded: true})); // parsing url on login page
router.use(bodyParser.json()); // API
router.use(cookieParser());
router.use(session({
    secret: 'change this while deployment',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

// Routes
router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/products', function(req, res) {
    res.render('index');
});

router.post('/signup', function(req, res) {
	User.findOne({'username': req.body.username}, function(err, user) {
		if(err) {
			console.log('Error in SignUp: '+err);
          	return done(err);
		}

		if(!user) {
			var user = {
				fullname: req.body.fullname,
	            email: req.body.email,
	            username: req.body.username,
	            passwordHash: hash(req.body.password),
			}

			var newUser = new User();
			newUser.fullname = user.fullname;
			newUser.email = user.email;
			newUser.username = user.username;
			newUser.passwordHash = user.passwordHash;

			newUser.save(function(err) {
				if(err) {
					console.log('Error in Saving user: '+err);  
              		return next(err);
				} else {
					console.log('User Registration succesful');
					res.redirect('/');
				}
			});
		} else {
	        // not a uniqure username
	        res.redirect('/login');
    	}
	});
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

function loginRequired(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

exports.routes = router;
exports.required = loginRequired;