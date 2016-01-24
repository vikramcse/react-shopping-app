var React = require('react');
var Link = require('react-router').Link;
var AddToCart = require('../cart/AddToCart.js');

var CatalogItem = React.createClass({
    render:function(){
        var itemStyle = {
            border: '1px solid #ccc',
            paddingBottom: 15,
            marginBottom: 15,
            marginRight: 15,
            marginTop: 15
        };

        return (
            <div className="col-sm-3" style={itemStyle}>
                <h4>{this.props.item.title}</h4>
                <img src={this.props.item.img} alt="" />
                <p>{this.props.item.summary}</p>
                <p>
                    ${this.props.item.cost}
                    <span className="text-success">
                        {this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}
                    </span>
                </p>
                <div className="btn-group button-group-xs" role="group">
                    <Link to={'/item/' + this.props.item._id} type="button" className="btn btn-default">Learn More</Link>
                    <AddToCart item={this.props.item} />
                </div>
          </div>
        );
    }
});

module.exports = CatalogItem;
