const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=> {
    console.log("connected to mongoDB")
});

app.listen(8800, () => {
    console.log("backend server is fujdhsfhaskdhjcking")
})