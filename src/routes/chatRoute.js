const express = require("express")
const router = express.Router()
const ChatController = require("../controllers/ChatController.js");

router.get(
    "/findContact",
    ChatController.searchPeople
);

router.get(
    "/getUsers",
    ChatController.getUsers
);

router.put(
    "/sendMessage",
    ChatController.sendMessage
)

module.exports = router
