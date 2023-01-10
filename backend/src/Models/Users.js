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

module.exports = {
  getAllUsers,
  createUser,
};
