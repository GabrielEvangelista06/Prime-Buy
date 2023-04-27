const usersModel = require('../Models/Users');

const getAllUsers = async (_req, res) => {
  const users = await usersModel.getAllUsers();

  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const createdUser = await usersModel.createUser(req.body);

  return res.status(201).json(createdUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await usersModel.deleteUser(id);

  return res.status(204).json();
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  await usersModel.updateUser(id, req.body);

  return res.status(204).json();
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
