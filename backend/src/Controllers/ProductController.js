const productsModel = require('../Models/products');

const getAll = async (_req, res) => {
  const products = await productsModel.getAll();

  return res.status(200).json(products);
};

const createProduct = async (_req, res) => {
  // const createProduct = await productsModel.createProduct();

  return res.status(201).json({ message: 'Product created successfully' });
};

module.exports = {
  getAll,
  createProduct,
};
