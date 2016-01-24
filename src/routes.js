var React = require("react");
var Router = require('react-router');
var Route = Router.Route;

var Catalog = require('./components/front/catalog/Catalog.js');
var Cart = require('./components/front/cart/Cart.js');
var CatalogDetail = require('./components/front/product/CatalogDetail.js');
var App = require('./components/front/App.js');

var routes = (
	<Route handler={App}>
		<Route name="catalog" path="/" handler={Catalog}/>
        <Route name="cart" path="/cart" handler={Cart}/>
        <Route name="detail" path="/item/:item" handler={CatalogDetail}/>
	</Route>
);

module.exports = routes;
