var React = require('react');
var AppActions = require('../../../front/actions/app-actions.js');

var AddToCart = React.createClass({
	handleClick: function() {
		AppActions.addItem(this.props.item);
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleClick}>Add to cart</button>
			</div>
		);
	}
});

module.exports = AddToCart;
