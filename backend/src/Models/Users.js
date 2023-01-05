const connection = require('./dbconnection');

const getAllUsers = async () => {
  const users = await connection.query('SELECT * FROM users');

  return users.rows;
};

module.exports = {
  getAllUsers,
};
