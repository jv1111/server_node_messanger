const jwtToken = require('../models/JwtModel');

const getTokenFromDatabase = async (token) => {
    const storedToken = await jwtToken.findOne({token: token})
    return storedToken
}

const removeToken = async (token) => {
    const deletedToken = await jwtToken.findOneAndDelete({ token: token });
    return deletedToken;    
}

module.exports = {
    getTokenFromDatabase,
    removeToken
};