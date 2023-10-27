const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController.js");
const { verrifyUserSession } = require("../middlewares/authMiddleware.js");

router.post(
    "/register",
    AuthController.register
);

router.get(
    "/loginSession",
    verrifyUserSession
)

module.exports = router;