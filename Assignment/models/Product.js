
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  unitPrice: Number,
  availableQuantity: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
