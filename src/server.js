const express = require('express')
const cors = require("cors")
require("dotenv").config()
const database = require("./databaseConnection.js")
const errorHandler = require('./utils/errorHandler.js')

const app = express()

const PORT = process.env.PORT
app.use(cors());
app.use(express.json());// to read json data
database.connectDb()

app.use("/auth", require("./routes/authRoute.js"));
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});