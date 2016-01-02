var React = require('react');
var App = require('./components/App');
var Admin = require('./components/Admin');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route name="admin" path="admin" component={Admin}/>
  </Router>
), document.getElementById('main'))

// React.render(
//   <App />,
//   document.getElementById('main')
// );
