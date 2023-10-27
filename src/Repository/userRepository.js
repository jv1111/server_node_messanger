const User = require('../models/UserModel');

const saveUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user
}

module.exports = {
  saveUser,
  getUserById
};