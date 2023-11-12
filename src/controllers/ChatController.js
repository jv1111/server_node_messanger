const chatService = require("../services/chatService.js");
const { tryCatchController } = require("../utils/tryCatchHandler.js");

const searchPeople = tryCatchController(async (req,res) => {
    const username = req.query.username
    const user = await chatService.searchPeople(username)
    console.log(user)
    res.status(200).json(user)
})

const getUsers = tryCatchController(async (req,res) => {
    const users = await chatService.getUsers();
    res.status(200).json(users)
})

module.exports = {
    searchPeople,
    getUsers
}