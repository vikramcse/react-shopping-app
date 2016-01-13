var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  fullname: String,
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  email: {type: String},
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', User);
module.exports = User;