var React = require('react');
var AppActions = require('../../../front/actions/app-actions.js');

var RemoveFromCart = React.createClass({
	handleClick: function() {
		AppActions.removeItem(this.props.index);
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleClick}>x</button>
			</div>
		);
	}
});

module.exports = RemoveFromCart;
