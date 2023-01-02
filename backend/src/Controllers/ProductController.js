const productsModel = require('../Models/products');

const getAll = async (req, res) => {
  const products = await productsModel.getAll();

  return res.status(200).json(products);
};

module.exports = {
  getAll,
};
