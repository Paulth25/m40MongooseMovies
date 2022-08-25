require("dotenv").config();
const mongoose = require("mongoose")

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("You are connected to your database")
    }
    catch (error){
        console.log("Database Connection Error",error)
    }
};

connection();