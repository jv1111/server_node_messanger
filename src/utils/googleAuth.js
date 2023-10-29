const clientId = process.env.GOOGLE_AUTH_CLIENT_ID
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(clientId);//client id is from the credentials console type (web)

const verify = async (googleToken) => {
    const ticket  = await client.verifyIdToken({
        idToken: googleToken,
        audience: clientId
    });
    const payload = ticket.getPayload();
    return payload;
}

module.exports = {
    verify
}