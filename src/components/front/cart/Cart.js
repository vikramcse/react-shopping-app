var React = require('react');
var AppStore = require('../../../front/stores/app-store.js');
var RemoveFromCart = require('./RemoveFromCart.js');
var Increase = require('./Increase.js');
var Decrease = require('./Decrease.js');

var Cart = React.createClass({
    getInitialState: function() {
        return {
            items: AppStore.getCart()
        };
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({
            items: AppStore.getCart()
        });
    },
    render:function(){
        var total = 0;
        var items = this.state.items.map(function(item, i){
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Increase index={i} />
                        <Decrease index={i} />
                    </td>
                    <td>${subtotal}</td>
                </tr>
            );
        })
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                    </tfoot>
            </table>
        )
    }
});

module.exports = Cart;
