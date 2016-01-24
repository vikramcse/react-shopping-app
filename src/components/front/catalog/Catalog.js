var React = require('react');
var AppStore = require('../../../front/stores/app-store.js');
var AppActions = require('../../../front/actions/app-actions.js');
var AddToCart = require('../cart/AddToCart.js');
var CatalogItem = require('./CatalogItem.js');

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
        render:function() {
            var items = this.state.items.map(function(item){
                return (
                    <CatalogItem item={item}/>
                )
            })

            return (
                <div className="row">
                    {items}
                </div>
            )
        }
    });

module.exports = Catalog;
