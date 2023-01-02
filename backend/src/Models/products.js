const connection = require('./dbconnection');

const getAll = async () => {
  const products = await connection.query('SELECT * FROM products');

  return products.rows;
};

const createProduct = async (product) => {
  const { name, description, price } = product;

  const query = 'INSERT INTO products (name, description, price) VALUES($1, $2, $3)';

  const createdProduct = await connection.query(query, [
    name,
    description,
    price,
  ]);

  return {
    message: 'Product created successfully',
    product: createdProduct.name,
  };
};

const deleteProduct = async (id) => {
  const removedProduct = await connection.query('DELETE FROM products WHERE id = $1',[id]);

  return removedProduct;
};

const updateProduct = async (id, product) => {
  const { name, description, price } = product;
  const query = 'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4';
  const updateProduct = await connection.query(query, [
    name,
    description,
    price,
    id,
  ]);

  return updateProduct;
};

module.exports = {
  getAll,
  createProduct,
  deleteProduct,
  updateProduct,
};
