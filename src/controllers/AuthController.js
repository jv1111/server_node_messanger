const tryCatchController = require("../utils/tryCatchController.js")

const register = tryCatchController(async (req,res) => {
    const { username } = req.body;
    res.status(201).json({
        message: "registering",
        username: username
    })
})

//export the the function
module.exports = {
    register
}