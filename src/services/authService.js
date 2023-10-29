const userRepository = require("../Repository/userRepository");
const bcryptHandler = require("../utils/bcryptHandler");
const jwtHandler = require("../utils/jwtHandler");
const { getTokenFromDatabase, removeToken } = require("../Repository/jwtRepository");
const { throwError } = require("../utils/errorHandler");
const googleAuth = require("../utils/googleAuth");

const register = async (userData) => {
    const hashedPassword = await bcryptHandler.hash(userData.password)
    const user = await userRepository.saveUser({...userData, password: hashedPassword})//save all data from the user and changed that hashedPassword
    const token = await jwtHandler.generateAndSaveToken(user._id)
    return {user: user, token: token}
}

const verifyUserSession = async (token) => {
    const storedToken = await getTokenFromDatabase(token)
    if(!storedToken) throwError("Invalid token", 401)
    const decodedToken = jwtHandler.verifyToken(token);
    const user = await userRepository.getUserById(decodedToken.id);
    if(!user) throwError("User not found", 401)
    const {_id, profileImg, username, email, authType} = user
    const newToken = await jwtHandler.refreshToken(storedToken, _id)
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

const localLogin = async(userInput) => {
    const user = await userRepository.getUserByUsername(userInput.username);
    if(!user) throwError("User not found", 404)
    const isPasswordValid = await bcryptHandler.compare(userInput.password, user.password)
    if(!isPasswordValid) throwError("Ivalid password", 401)
    const {_id, profileImg, username, email, authType} = user
    const token = await jwtHandler.generateAndSaveToken(user._id)
    return {
        _id: _id,
        profileImg: profileImg,
        username: username,
        email: email,
        authType: authType,
        token: token
    }
}

const loginWithGoogle = async(googleToken) => {
    const payload = await googleAuth.verify(googleToken)
    var user = await userRepository.getUserByEmail(payload.email);
    if(!user){
        user = await userRepository.saveUser({
            email: payload.email,
            profileImg: {url: payload.picture, filePath: null},
            authType: "google"
        })
        console.log("new user has saved");
    }
    const {_id, profileImg, username, email, authType} = user
    const jwtToken = await jwtHandler.generateAndSaveToken(user._id)
    return {
        _id: _id,
        profileImg: profileImg,
        username: username,
        email: email,
        authType: authType,
        jwtToken: jwtToken
    }
}

const logout = async(token) => {
    const deletedToken = await removeToken(token)
    if(!deletedToken) throwError("Token not found", 404)
    return { success: true, deletedToken: deletedToken }
}

module.exports = {
    register,
    verifyUserSession,
    getUserByUsername,
    localLogin,
    loginWithGoogle,
    logout
}