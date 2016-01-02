var React = require('react');
var Login = require('./Login.js');
var Link = require('react-router').Link;
var ref = new Firebase("zenleather.firebaseio.com");

var Admin = React.createClass({
	getInitialState: function() {
		return {
			loggedIn: false
		};
	},
    render() {
		return (
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className="menu-text"><Link to="/">Shopping Site</Link></li>
							<li><Link to="/admin">Admin</Link></li>
						</ul>
					</div>
				</div>
				<br/>
				<Login />
			</div>
		)
	}
});

module.exports = Admin;
