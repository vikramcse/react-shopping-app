var React = require('react');

var Item = React.createClass({
    buyProduct: function() {
        alert("bought");
    },
    render() {
        return (
            <div className="column">
                <img className="thumbnail" src={this.props.image}/>
                <h5>{this.props.title}</h5>
                <p>{this.props.price}</p>
                <a onClick={this.buyProduct} className="button expanded">Buy</a>
            </div>
        );
    }
});

module.exports = Item;
