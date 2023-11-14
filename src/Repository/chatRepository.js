const Chat = require('../models/ChatModel.js');

const saveMessage = async (chatData) => {
    const chat = new Chat(chatData);
    return await chat.save();
}
module.exports = {
    saveMessage
}