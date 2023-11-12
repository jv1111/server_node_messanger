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

const searchUser = async (inputText) => {
    const regex = new RegExp(inputText, 'i'); // Case-insensitive regex pattern
    const users = await User.find({ username: regex });
    return users;
}

const getUsers = async () => {
  const limit = 20;
  const users = await User.find().limit(limit);
  return users;
};

module.exports = {
  saveUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  searchUser,
  getUsers
};