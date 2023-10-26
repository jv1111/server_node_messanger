const userRepository = require("../Repository/userRepository");
const bcryptHandler = require("../utils/bcryptHandler");
const jwtHandler = require("../utils/jwtHandler");

const register = async (userData) => {
    const hashedPassword = await bcryptHandler.hash(userData.password)
    const user = await userRepository.saveUser({...userData, password: hashedPassword})//save all data from the user and changed that hashedPassword
    const token = await jwtHandler.generateAndSaveToken(user._id)
    return {user: user, token: token}
}

module.exports = {
    register
}