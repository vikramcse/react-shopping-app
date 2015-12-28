var React = require('react');
var Item = require('./Item.js');

var App =  React.createClass({
	render() {
		return (
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className="menu-text">Shopping Site</li>
						</ul>
					</div>
				</div>
				<br/>
				<div className="row small-up-2 large-up-4">
					<Item/>
					<Item/>
					<Item/>
				</div>
			</div>
		)
	}
});

module.exports = App;
