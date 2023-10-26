const User = require('../models/UserModel');

const saveUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = {
  saveUser
};