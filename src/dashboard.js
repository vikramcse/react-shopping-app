var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Layout = require('./components/dashboard/Layout.js');
var AddProduct = require('./components/dashboard/AddProduct.js');
var Orders = require('./components/dashboard/Orders.js');

var routes = (
	<Route handler={Layout}>
		<Route name="addProduct" path="/addProduct" handler={AddProduct}/>
        <Route name="orders" path="/orders" handler={Orders}/>
	</Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
    React.render(<Root />, document.getElementById('dashboard'));
});
