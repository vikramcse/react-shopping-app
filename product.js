var router = module.exports = require('express').Router();
var login  = require('./adminLogin');
var config = require('./config.local.js');

var mongoose = require('mongoose');
var Product = require('./models/Product.js');
var cloudinary = require('cloudinary');
cloudinary.config(config.imageCloud);

router.route('/api/product')
	.get(function(req, res) {
		Product.find({}, function(err, products) {
			if(!err) {
				res.json(products);
			} else {
				console.log("error in get request...");
				return;
			}
		});
	})
	.post(function(req, res) {
		var product = req.body;
		getCdnUrl(product.path).then(function(url) {
			var newProduct = new Product();
			newProduct.name = product.name;
			newProduct.url = url,
			newProduct.type = product.type,
			newProduct.quantity = product.quantity

			newProduct.save(function(err) {
				if(err) {
					console.log('Error in Saving Product: '+err);  
	          		return;
				} else {
					console.log('Product saved succesfully');
				}
			});
		});
	});

var getCdnUrl = function(path) {
	return new Promise(function(resolve) {
		cloudinary.uploader.upload(path, function(result) {
			resolve(result.url);
		});
	});
}