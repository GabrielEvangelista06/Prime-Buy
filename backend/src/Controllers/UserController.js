const usersModel = require('../Models/Users');

const getAllUsers = async (_req, res) => {
  const users = await usersModel.getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  getAllUsers,
};
