const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=> {
    console.log("connected to mongoDB");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
    res.send("welcome to home page and I'm Vu Duy Nhien a profestional programmerm");
})


app.get("/user", (req, res) => {
    res.send("this is user home page");
})




app.listen(8800, () => {
    console.log("backend server is running on port 8800");
})