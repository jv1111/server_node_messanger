const jwtToken = require('../models/JwtModel');

const getTokenFromDatabase = async (token) => {
    const storedToken = await jwtToken.findOne({token: token})
    return storedToken
}

module.exports = {
    getTokenFromDatabase
};