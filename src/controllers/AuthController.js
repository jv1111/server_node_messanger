

const register = async (req, res) =>{
    try {
        const { username } = req.body;//get the username from the request
        //you could also get the whole userData
        //const userData = req.body; and access it using userData.username
        res.status(201).json({
            message: "registering",
            username: username
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//export the the function
module.exports = {
    register
}