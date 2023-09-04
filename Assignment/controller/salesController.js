const express = require('express');
const Sale = require('../models/Sales'); // Assuming you have a Sales model
const Product = require('../models/Product'); // Assuming you have a Product model

// Create a new sale
const saveSale = async (req, res) => {
  try {
    const { employeeId, products, discount, vat } = req.body;

    // Calculate the total price of the sale
    const subtotal = products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    const total = subtotal + vat - discount;

    // Create a new sale record
    const sale = new Sale({
      employeeId,
      products,
      discount,
      vat,
      subtotal,
      total,
    });

    // Save the sale in the database
    await sale.save();

    // Update product quantities in the database
    for (const product of products) {
      const existingProduct = await Product.findById(product.productId);
      if (existingProduct) {
        existingProduct.quantity -= product.quantity;
        await existingProduct.save();
      }
    }

    return res.status(201).json({ message: 'Sale created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a list of all sales
const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllSales,saveSale}