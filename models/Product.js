var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  type: { type: String },
  quantity: { type: String },
  created_at: Date,
  updated_at: Date
});

var Product = mongoose.model('Product', Product);
module.exports = Product;