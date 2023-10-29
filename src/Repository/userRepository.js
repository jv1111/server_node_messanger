const User = require('../models/UserModel');

const saveUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user
}

const getUserByUsername = async (username) => {
  const user = await User.findOne({username: username})
  return user
}

const getUserByEmail = async (email) => {
  const user = await User.findOne({email: email})
  return user
}

module.exports = {
  saveUser,
  getUserById,
  getUserByUsername,
  getUserByEmail
};