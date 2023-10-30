
const getTokenFromRequest = (req) => {
    var token
    if(req.cookies.token) {
        console.log("getting from cookies")
        token = req.cookies.token
    }
    else {
        console.log("getting from headers")
        token = req.headers.authorization.split(' ')[1];
    }
    return token
}

module.exports = {
    getTokenFromRequest
}