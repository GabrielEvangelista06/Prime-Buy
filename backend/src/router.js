const express = require('express');
const productsController = require('./Controllers/ProductController');
const productMiddleware = require('./Middlewares/ProductMiddleware');
const userController = require('./Controllers/UserController');

const router = express.Router();

router.get('/products', productsController.getAll);
router.post(
  '/products',
  productMiddleware.validateName,
  productMiddleware.validateDescription,
  productMiddleware.validatePrice,
  productsController.createProduct
);
router.delete('/products/:id', productsController.deleteProduct);
router.put(
  '/products/:id',
  productMiddleware.validateName,
  productMiddleware.validateDescription,
  productMiddleware.validatePrice,
  productsController.updateProduct
);

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
