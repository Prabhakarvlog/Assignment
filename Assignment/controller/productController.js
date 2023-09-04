
const express = require('express');
const Product = require('../models/Product');

// Create a new product
const addProduct = async (req, res) => {
  const { name, category, unitPrice, availableQuantity, image } = req.body;
  const newProduct = new Product({
    name,
    category,
    unitPrice,
    availableQuantity,
    image,
  });
  newProduct.save()
    .then((product) => {
      return res.json(product);
    })
    .catch((err) => {
      return res.status(500).json({ error: 'Error creating product' });
    });
};

// Update an existing product
const updateProduct = async  (req, res) => {
  const productId = req.params.id;
  const { name, category, unitPrice, availableQuantity, image } = req.body;
  Product.findByIdAndUpdate(productId, {
    name,
    category,
    unitPrice,
    availableQuantity,
    image,
  })
    .then(() => {
      return res.json({ message: 'Product updated successfully' });
    })
    .catch((err) => {
      return res.status(500).json({ error: 'Error updating product' });
    });
};

// Delete a product
const  deleteProduct= async (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId)
    .then(() => {
      return res.json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
      return res.status(500).json({ error: 'Error deleting product' });
    });
};

// Fetch product list
const getProductList = async  (req, res) => {
  Product.find()
    .then((products) => {
      return res.json(products);
    })
    .catch((err) => {
      return res.status(500).json({ error: 'Error fetching products' });
    });
};

module.exports = {
    addProduct,updateProduct,deleteProduct,getProductList
};
