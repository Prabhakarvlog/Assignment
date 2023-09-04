const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  invoiceNumber: String,
  employeeID: String,
  date: Date,
  productsSold: [
    {
      productId: String,
      quantity: Number,
      price: Number,
    },
  ],
  discount: Number,
  VAT: Number,
  invoiceTotal: Number,
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
