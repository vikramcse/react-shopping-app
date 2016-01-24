var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  title: { type: String},
  img: { type: String},
  summary: { type: String },
  description: { type: String },
  cost: { type: Number },
  type: { type: String },
  stock: { type: String },
  created_at: Date,
  updated_at: Date
});

var Product = mongoose.model('Product', Product);
module.exports = Product;
