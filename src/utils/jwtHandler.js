const jwt = require('jsonwebtoken');
const Jwt = require('../models/JwtModel'); // assuming the JWT model is in a models directory

const generateAndSaveToken = async (userId, expires) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  const jwtInstance = new Jwt({ token: token, user: userId, expiresAt: expires });
  await jwtInstance.save();
  return token;
};

const refreshToken = async (storedToken, userId, expires) => {
  const newToken = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  await Jwt.findOneAndUpdate(
    {_id: storedToken._id},
    {token: newToken, expiresAt: expires}
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