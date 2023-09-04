const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/add', productController.addProduct);
router.put('/update/:productId', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);
router.get('/list', productController.getProductList);

module.exports = router;
