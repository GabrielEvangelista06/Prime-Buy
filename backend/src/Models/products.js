const connection = require('./dbconnection');

const getAll = async () => {
  const products = await connection.query('SELECT * FROM products');

  return products.rows;
};

const createProduct = async (product) => {
  const { name, description, price } = product;

  const query =
    'INSERT INTO products (name, description, price) VALUES(?, ?, ?)';

  const createdProduct = await connection.query(query, [
    name,
    description,
    price,
  ]);

  return createdProduct.rows;
};

module.exports = {
  getAll,
  createProduct,
};
