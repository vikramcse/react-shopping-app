var React = require('react');
var Catalog = require('./catalog/Catalog.js');
var Cart = require('./cart/Cart.js');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location  = Router.Location;

var Template = require('./AppTemplate.js');
var Catalog = require('./catalog/Catalog.js');
var Cart = require('./cart/Cart.js');
var CatalogDetail = require('./catalog/CatalogItem.js');

var App = React.createClass({
	render: function() {
		return (
			<Template>
		        <Locations>
					<Location path="/products" handler={Catalog} />
					<Location path="/products/cart" handler={Cart} />
					<Location path="/products/item/:item" handler={CatalogDetail} />
		        </Locations>
      		</Template>
		);
	}
});

module.exports = App;
