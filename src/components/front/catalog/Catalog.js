var React = require('react');
var AppStore = require('../../../front/stores/app-store.js');
var AppActions = require('../../../front/actions/app-actions.js');
var AddToCart = require('../cart/AddToCart.js');

var Catalog =
    React.createClass({
        getInitialState:function(){
            return {
                items: []
            }
        },
        componentWillMount: function() {
            AppStore.addChangeListener(this._onChange);
        },
        componentDidMount: function() {
            AppActions.getDataFromServer();
        },
        componentWillUnmount: function() {
            AppStore.removeChangeListener(this._onChange);
        },
        _onChange: function() {
            this.setState({
                items: AppStore.getCatalog()
            });
        },
        render:function(){
            if (this.state.items) {
                var items = this.state.items.map(function(item){
                    return (
                        <tr>
                            <td>{item.title}</td>
                            <td>${item.cost}</td>
                            <td><AddToCart item={item} /></td>
                        </tr>
                    )
                })
            }
            return (
                <table className="table table-hover">
                    <tbody>
                        {items}
                    </tbody>
               </table>
            )
        }
    });

module.exports = Catalog;
