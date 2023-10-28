const authService = require("../services/authService");
const { throwError } = require("../utils/errorHandler");
const { tryCatchController } = require("../utils/tryCatchHandler")

const verifyUserSession = tryCatchController(async (req,res,next) => {
    var token;
    if(req.cookies) token = req.cookies.token
    const user = await authService.verifyUserSession(token);
    res.cookie("token", user.token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(200).json(user)
})

const verifyLocalRegistration = tryCatchController(async (req,res,next) => {
    const username = req.body.username
    const user = await authService.getUserByUsername(username);
    if(user) throwError("This user is already registered", 409)
    next()
})

module.exports = {
    verifyUserSession,
    verifyLocalRegistration
}