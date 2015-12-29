var React = require('react');
var Item = require('./Item.js');

var ItemList = React.createClass({
    render() {
        var Items = this.props.data.map(function(item) {
            return (
                <Item
                    image={item.image}
                    title={item.title}
                    price={item.price}/>
            );
        });

        return (
            <div>
                {Items}
            </div>
        )
    }
});

module.exports = ItemList;
