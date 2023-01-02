const connection = require('./dbconnection');

const getAll = async () => {
  const products = await connection.query('SELECT * FROM products');

  return products.rows;
};

module.exports = {
  getAll,
};
