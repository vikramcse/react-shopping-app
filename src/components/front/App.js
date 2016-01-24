var React = require('react');
var Catalog = require('./catalog/Catalog.js');
var Cart = require('./cart/Cart.js');
var RouteHandler = require('react-router').RouteHandler;
var Template = require('./AppTemplate.js');

var App = React.createClass({
	render: function() {
		return (
			<Template>
		        <RouteHandler/>
      		</Template>
		);
	}
});

module.exports = App;
