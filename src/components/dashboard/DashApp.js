var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Layout = require('./Layout.js');

var DashApp = React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
                    Dashboard
                </div>
                <div className="row">
                    <RouteHandler />
                </div>
			</div>
		);
	}
});

module.exports = DashApp;