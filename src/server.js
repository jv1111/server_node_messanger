const express = require('express')
const cors = require("cors")
require("dotenv").config()
const database = require("./databaseConnection.js")
const cookieParser = require('cookie-parser')
const { errorHandler } = require('./utils/errorHandler.js')

const app = express()

const PORT = process.env.PORT
app.use(cors({
    origin: process.env.WEB_CLIENT_URL,
    credentials: true// Set credentials to true to enable passing cookies to the client. This is necessary for our server to save session cookies on the client's browser
}));
app.use(express.json());// to read json data
app.use(cookieParser());// to send cookie
database.connectDb()

app.use("/auth", require("./routes/authRoute.js"));
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});