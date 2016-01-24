var React = require('react');
var CartSummary = require('./CartSummary.js');

var Header = React.createClass({
  render:function(){
    return (
        <div className="row">
          <div className="col-sm-6"><h2>Leather Products</h2></div>
          <div className="col-sm-2 col-sm-push-4">
            <br />
            <CartSummary />
          </div>
       </div>
    );
  }
});

module.exports = Header;
