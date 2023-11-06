const userRepository = require("../Repository/userRepository");

const generateUniqueUsername = async (username) =>{
    var newUsername = username
    var tailingNumber = 1
    var user = await userRepository.getUserByUsername(username)
    
    while(user != null){
        newUsername = username + tailingNumber
        user = await userRepository.getUserByUsername(newUsername)
        tailingNumber++
    }

    return newUsername;
}

module.exports = {
    generateUniqueUsername
}