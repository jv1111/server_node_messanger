const userRepository = require("../Repository/userRepository");
const bcryptHandler = require("../utils/bcryptHandler");
const jwtHandler = require("../utils/jwtHandler");
const expiryGenerator = require("../utils/expiryGenerator");

const register = async (userData) => {
    const hashedPassword = await bcryptHandler.hash(userData.password)
    const user = await userRepository.saveUser({...userData, password: hashedPassword})//save all data from the user and changed that hashedPassword
    const tokenExpiry = expiryGenerator.expireInHours(24);
    const token = await jwtHandler.generateAndSaveToken(user._id, tokenExpiry)
    return {user: user, token: token}
}

module.exports = {
    register
}