var React = require('react');
var App = require('./components/front/App.js');
var ReactRouter = require('react-router');
var routes = require('./routes.js');

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
    React.render(<Root />, document.getElementById('front'));
});
