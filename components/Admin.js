var React = require('react');
var Link = require('react-router').Link;

var Admin = React.createClass({
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
				<h1>Admin</h1>
			</div>
		)
	}
});

module.exports = Admin;
