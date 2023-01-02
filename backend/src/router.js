const express = require('express');
const productsController = require('./Controllers/ProductController');
const productMiddleware = require('./Middlewares/ProductMiddleware');

const router = express.Router();

router.get('/products', productsController.getAll);
router.post(
  '/products', productMiddleware.validateBody, productsController.createProduct
);
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;
