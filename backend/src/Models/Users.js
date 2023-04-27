const connection = require('./dbconnection');

const getAllUsers = async () => {
  const users = await connection.query('SELECT * FROM users');

  return users.rows;
};

const createUser = async (user) => {
  const { name, username, email, password } = user;

  const query =
    'INSERT INTO users (name, username, email, password) VALUES ($1,$2,$3,$4)';

  const createdUser = await connection.query(query, [
    name,
    username,
    email,
    password,
  ]);

  return {
    message: 'Usuário criado com sucesso',
    user: createdUser.name,
  };
};

const deleteUser = async (id) => {
  const removedUser = await connection.query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );

  return removedUser;
};

const updateUser = async (id, product) => {
  const { name, description, price } = product;
  const query =
    'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4';
  const updateProduct = await connection.query(query, [
    name,
    description,
    price,
    id,
  ]);

  return updateProduct;
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
