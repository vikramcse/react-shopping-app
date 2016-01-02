var React = require('react');
var ItemList = require('./ItemList.js');
var Firebase = require("firebase");
var Link = require('react-router').Link;

var App =  React.createClass({
	componentDidMount: function() {
		//var ref = new Firebase("zenleather.firebaseio.com/items");
		var items = [{
			image: "http://placehold.it/300x300",
            title: "Item 1",
            price: "$400",
			quantity: 5
		}, {
			image: "http://placehold.it/300x300",
            title: "Item 2",
            price: "$300",
			quantity: 5
		}, {
			image: "http://placehold.it/300x300",
            title: "Item 3",
            price: "$250",
			quantity: 10
		}];

		this.setState({
			itemList: items
		});

	},
	getInitialState: function() {
		return {
			itemList: []
		};
	},
	render() {
		return (
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className="menu-text"><Link to="/">Shopping Site</Link></li>
							<li><Link to="/admin">Admin</Link></li>
						</ul>
					</div>
				</div>
				<br/>
				<div className="row small-up-2 large-up-4">
					<ItemList data={this.state.itemList} />
				</div>
			</div>
		)
	}
});

module.exports = App;
