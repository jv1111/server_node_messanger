const chatRepository = require("../Repository/chatRepository.js");
const userRepository = require("../Repository/userRepository.js");

const searchPeople = async (searchVal) => {
    const user = userRepository.searchUser(searchVal)
    return user;
}

const getUsers = async () => {
    const users = await userRepository.getUsers();
    return users
}

const sendMessage = async (chatData)  => {
    const response = await chatRepository.saveMessage(chatData)
    return {success: true}
}

module.exports = {
    searchPeople,
    getUsers,
    sendMessage
}