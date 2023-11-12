const { tryCatchController } = require("../utils/tryCatchHandler.js")
const authService = require("../services/authService.js");
const { setToken } = require("../helper/cookieHelper.js");
const { getTokenFromRequest } = require("../helper/authHelper.js");

const register = tryCatchController(async (req,res) => {
    const user = await authService.register(req.body)
    setToken(res, user.token)
    res.status(201).json(user)
})

const localLogin = tryCatchController(async (req,res) => {
    const user = await authService.localLogin(req.body)
    console.log(user)
    setToken(res, user.token)
    res.status(200).json(user)
})

const googleLogin = tryCatchController(async (req,res)=>{
    console.log(req.body);
    const googleToken = req.body.token
    const user = await authService.loginWithGoogle(googleToken);
    console.log("google login");
    console.log(user)
    res.status(200).json(user)
})

const logout = tryCatchController(async (req,res)=>{
    const token = getTokenFromRequest(req)
    const response = await authService.logout(token)
    res.status(200).json(response)
})

//export the the function
module.exports = {
    register,
    localLogin,
    googleLogin,
    logout
}