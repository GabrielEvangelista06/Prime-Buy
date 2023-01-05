const usersModel = require('../Models/Users');

const getAllUsers = async (_req, res) => {
  const users = await usersModel.getAllUsers();

  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const createdUser = await usersModel.createUser(req.body);

  return res.status(201).json(createdUser);
};

module.exports = {
  getAllUsers,
  createUser,
};
