const mongoose = require("mongoose");

const connectDB = () => {
    const url = process.env.MONGO_URI;
    try {
        mongoose.connect(url).then((res) => {
            console.log(`Mongo Is Host on ${res.connection.host}`);
        })
    } catch (error) {
        console.log(`Something Went Wrong : ${error}`);
    }
};

module.exports = connectDB;
