const productsModel = require('../Models/products');

const getAll = async (_req, res) => {
  const products = await productsModel.getAll();

  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const createProduct = await productsModel.createProduct(req.body);

  return res.status(201).json(createProduct);
};

module.exports = {
  getAll,
  createProduct,
};
