const userRepository = require("../Repository/userRepository");
const bcryptHandler = require("../utils/bcryptHandler");
const jwtHandler = require("../utils/jwtHandler");
const expiryGenerator = require("../utils/expiryGenerator");
const { getTokenFromDatabase } = require("../Repository/jwtRepository");
const { throwError } = require("../utils/errorHandler");

const register = async (userData) => {
    const hashedPassword = await bcryptHandler.hash(userData.password)
    const user = await userRepository.saveUser({...userData, password: hashedPassword})//save all data from the user and changed that hashedPassword
    const tokenExpiry = expiryGenerator.expireInHours(24);
    const token = await jwtHandler.generateAndSaveToken(user._id, tokenExpiry)
    return {user: user, token: token}
}

const verifyUserSession = async (token) => {
    console.log(token)
    const storedToken = await getTokenFromDatabase(token)
    if(!storedToken) throwError("Invalid token", 401)
    const decodedToken = jwtHandler.verifyToken(token);
    const user = await userRepository.getUserById(decodedToken.id);
    if(!user) throwError("User not found", 401)
    const tokenExpiry = expiryGenerator.expireInHours(24);
    const {_id, profileImg, username, email, authType} = user
    const newToken = await jwtHandler.refreshToken(storedToken, _id, tokenExpiry)
    return {
        _id: _id,
        profileImg: profileImg,
        username: username,
        email: email,
        authType: authType,
        token: newToken
    }
}

const getUserByUsername = async(username) => {
    const user = await userRepository.getUserByUsername(username)
    return user
}

module.exports = {
    register,
    verifyUserSession,
    getUserByUsername
}