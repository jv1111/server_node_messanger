const { tryCatchController } = require("../utils/tryCatchHandler.js")
const authService = require("../services/authService.js");
const { expireInHours } = require("../utils/expiryGenerator.js");
const { setToken } = require("../helper/cookieHelper.js");

const register = tryCatchController(async (req,res) => {
    const user = await authService.register(req.body)
    setToken(res, user.token)
    res.status(201).json(user)
})

const localLogin = tryCatchController(async (req,res) => {
    const user = await authService.localLogin(req.body)
    console.log(user.token)
    setToken(res, user.token)
    res.status(200).json(user)
})

const logout = tryCatchController(async (req,res)=>{
    const token = req.cookies.token
    const response = await authService.logout(token)
    res.status(200).json(response)
})

//export the the function
module.exports = {
    register,
    localLogin,
    logout
}