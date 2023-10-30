const authService = require("../services/authService");
const { throwError } = require("../utils/errorHandler");
const { tryCatchController } = require("../utils/tryCatchHandler")
const { getTokenFromRequest } = require("../helper/authHelper")

const verifyUserSession = tryCatchController(async (req,res,next) => {
    var token = getTokenFromRequest(req);
    const user = await authService.verifyUserSession(token);
    res.cookie("token", user.token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(200).json(user)
})

const verifyLocalRegistration = tryCatchController(async (req,res,next) => {
    const username = req.body.username
    if(!username) throwError("Must have a username", 409)
    const user = await authService.getUserByUsername(username);
    if(user) throwError("This user is already registered", 409)
    next()
})

module.exports = {
    verifyUserSession,
    verifyLocalRegistration
}