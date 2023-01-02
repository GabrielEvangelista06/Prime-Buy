const express = require('express');
const productsController = require('./Controllers/ProductController');

const router = express.Router();

router.get('/products', productsController.getAll);

module.exports = router;
