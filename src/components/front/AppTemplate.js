var React = require('react');
var Header = require('./header/AppHeader.js');

var Template = React.createClass({
  render:function(){
    return (
      <div className="col-lg-12">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Template;
