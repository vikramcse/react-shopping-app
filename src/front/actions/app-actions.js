var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var API = require('../helpers/restHelper.js');

var AppActions = {
    getDataFromServer: function() {
        API.fetchProducts().then(function(data) {
            AppDispatcher.handleViewAction({
                actionType: AppConstants.FETCH_DATA,
                catalog: data
            });
        });
    },
    addItem: function(item) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },
    removeItem:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },
    decreaseItem:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        })
    },
    increaseItem:function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        })
    }
};

module.exports = AppActions;
