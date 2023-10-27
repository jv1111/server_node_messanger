const { tryCatchController } = require("../utils/tryCatchHandler.js")
const authService = require("../services/authService.js");

const register = tryCatchController(async (req,res) => {
    const user = await authService.register(req.body)
    res.status(201).json(user)
})

const localLogin = tryCatchController(async (req,res) => {
    const user = await authService.localLogin(req.body)
    res.cookie("token", user.token, {
        httpOnly: true
    })
    res.status(200).json(user)
})

//export the the function
module.exports = {
    register,
    localLogin
}