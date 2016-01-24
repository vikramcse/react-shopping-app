var express = require('express');
var bodyParser = require('body-parser');
var login = require('./adminLogin.js');

var app = express();
var port = 7777;

// Middleware configuration
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(login.routes);
app.use(require('./product'));
app.get('/dash', login.required, function(req, res) {
    res.render('dash', {
        user: req.user
    });
});

app.get('*', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('server started listening on port ' + port);
});
