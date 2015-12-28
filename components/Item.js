var React = require('react');
var Item = React.createClass({
    getInitialState: function() {
        return {
            image: "http://placehold.it/300x300",
            title: "This is a Title",
            price: "$400"
        };
    },
    render() {
        return (
            <div className="column">
                <img className="thumbnail" src={this.state.image}/>
                <h5>{this.state.title}</h5>
                <p>{this.state.price}</p>
                <a href="#" className="button small expanded hollow">Buy</a>
            </div>
        );
    }
});

module.exports = Item;
