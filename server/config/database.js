const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("DB connect successful"))
    .catch((error)=>{
        console.log("Issue in db connection");
        console.error(error.message);
        process.exit(1);
    });
    
}

module.exports = dbConnect;