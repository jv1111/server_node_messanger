const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController.js");
const { verifyUserSession, verifyLocalRegistration } = require("../middlewares/authMiddleware.js");

router.post(
    "/register",
    verifyLocalRegistration,
    AuthController.register
);

router.get(
    "/loginSession",
    verifyUserSession
);

router.post(
    "/login",
    AuthController.localLogin
)

router.delete(
    "/logout",
    AuthController.logout
)

router.post(
    "/googleLogin",
    AuthController.googleLogin
)

module.exports = router;