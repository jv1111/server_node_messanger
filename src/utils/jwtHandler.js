const jwt = require('jsonwebtoken');
const Jwt = require('../models/JwtModel'); // assuming the JWT model is in a models directory

const generateAndSaveToken = async (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
    //const expires = new Date();
    //expires.setHours(expires.getHours() + 1); // Token expires after 1 hour
  
    // const jwtInstance = new Jwt({ token, user: userId, user,expires });
    const jwtInstance = new Jwt({ token: token, user: userId });
    await jwtInstance.save();
  
    return token;
  };
  
  module.exports = {
    generateAndSaveToken
  };