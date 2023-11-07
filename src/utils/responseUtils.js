function removePassword(userObject) {
    const userWithoutPassword = {
        id: userObject._id,
        profileImg: userObject.profileImg,
        username: userObject.username,
        email: userObject.email,
        authType: userObject.authType,
    }
    return userWithoutPassword;
}

module.exports = {
    removePassword
}