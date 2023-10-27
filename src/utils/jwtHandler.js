const jwt = require('jsonwebtoken');
const Jwt = require('../models/JwtModel'); // assuming the JWT model is in a models directory
const {expireInHours} = require("./expiryGenerator")

const generateAndSaveToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  const tokenExpiry = expireInHours(24);
  const jwtInstance = new Jwt({ token: token, user: userId, expiresAt: tokenExpiry });
  await jwtInstance.save();
  return token;
};

const refreshToken = async (storedToken, userId) => {
  const newToken = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  const tokenExpiry = expireInHours(24);
  await Jwt.findOneAndUpdate(
    {_id: storedToken._id},
    {token: newToken, expiresAt: tokenExpiry}
  )
  return newToken;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  return decoded
}
  
module.exports = {
  generateAndSaveToken,
  verifyToken,
  refreshToken
};