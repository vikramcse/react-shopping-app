var React = require('react');
var AppActions = require('../../../front/actions/app-actions.js');

var Decrease = React.createClass({
	handleClick: function() {
		AppActions.decreaseItem(this.props.index);
	},
	render: function() {
		return (
			<div>
				<button onClick={this.handleClick}>-</button>
			</div>
		);
	}
});

module.exports = Decrease;
