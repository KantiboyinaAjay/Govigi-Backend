const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  pricePerKg: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String }
});

module.exports = mongoose.model('product', productSchema);
