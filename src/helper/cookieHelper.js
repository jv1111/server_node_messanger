
const  setToken = (response, token) => {
    console.log("Setting new token")
    response.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
    });
}

module.exports = {
    setToken
}