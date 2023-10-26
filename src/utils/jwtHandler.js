const jwt = require('jsonwebtoken');
const Jwt = require('../models/JwtModel'); // assuming the JWT model is in a models directory

const generateAndSaveToken = async (userId, expires) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
    const jwtInstance = new Jwt({ token: token, user: userId, expires: expires });
    await jwtInstance.save();
    return token;
  };
  
  module.exports = {
    generateAndSaveToken
  };