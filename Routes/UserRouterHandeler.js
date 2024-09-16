const express = require("express")

const UserRouterHandeler = express.Router()

const { CreateUserAccount,LoginUserAccount,LogOutUserAccount,DeletUserAccount }= require("../Routes/utilities/UserAuthHandelar")

UserRouterHandeler.post("/singup",CreateUserAccount)
UserRouterHandeler.post("/singin",LoginUserAccount)
UserRouterHandeler.post("/logout",LogOutUserAccount)
UserRouterHandeler.post("/delet",DeletUserAccount)




module.exports = {UserRouterHandeler}