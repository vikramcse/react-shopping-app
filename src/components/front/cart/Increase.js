var React = require('react');
var AppActions = require('../../../front/actions/app-actions.js');

var Increase = React.createClass({
	handleClick: function() {
		AppActions.increaseItem(this.props.index);
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleClick}>+</button>
			</div>
		);
	}
});

module.exports = Increase;
