const authService = require("../services/authService")
const { tryCatchController } = require("../utils/tryCatchHandler")

const verrifyUserSession = tryCatchController(async (req,res,next) => {
    const token = req.headers.authorization
    const user = await authService.verifyUserSession(token);
    res.status(200).json(user)
})

module.exports = {
    verrifyUserSession
}