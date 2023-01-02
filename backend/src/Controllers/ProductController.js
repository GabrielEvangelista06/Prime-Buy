const productsModel = require('../Models/products');

const getAll = async (_req, res) => {
  const products = await productsModel.getAll();

  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const createProduct = await productsModel.createProduct(req.body);

  return res.status(201).json(createProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await productsModel.deleteProduct(id);

  return res.status(204).json();
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  await productsModel.updateProduct(id, req.body);

  return res.status(204).json();
};

module.exports = {
  getAll,
  createProduct,
  deleteProduct,
  updateProduct,
};
