const express = require('express');
const router = express.Router();
const salesController = require('../controller/salesController');

router.post('/save', salesController.saveSale);
router.get('/getSave', salesController.getAllSales);

module.exports = router;
