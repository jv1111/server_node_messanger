const mongoose = require("mongoose");

// database connection
const connectDb = () => {
    mongoose.connect(
        process.env.MONGO_URI,//for localhost connection use something like 0.0.0.0:27017
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=>{
        console.log("database is connected!");
    }).catch((error)=>{
        console.log(`${error} \n Database connection failed!`);
    })
}

module.exports = {
    connectDb
}