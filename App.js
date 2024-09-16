const express = require("express")
const bodyParser = require('body-parser');
const CookieParser = require("cookie-parser")
const mongoose = require("mongoose")


/// IMPORT UTILITES FILE
const {UserRouterHandeler} = require("./Routes/UserRouterHandeler");
const { BlogRouterHandeler } = require("./Routes/BlogRouterHandeler");

const app  = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(CookieParser())
require("dotenv").config()


/// CONNECT MONGOODB ACCOUNT

mongoose.connect("mongodb+srv://wahidahmed220020:Wahid1$2%4012345@cluster0.yy42g.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("MONGODB ACCOUNT CONNECT SUCCESSFUL"))
    .catch(err => console.error("MONGODB CONNECTION ERROR:", err));

//// ROUTE HANDLE 
app.use("/user",  UserRouterHandeler)
app.use("/blog",  BlogRouterHandeler)



app.listen(process.env.PORT,()=>{
    console.log(`THIS SERVER IS RUNING ON PORT ${process.env.PORT}`)
})