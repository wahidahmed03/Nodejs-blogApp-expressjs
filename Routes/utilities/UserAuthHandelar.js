const express = require("express")
const bcrytp = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const User = require("../../schema/UserSchema")


const CreateUserAccount = async (req,res)=>{
    const {email, username,password,accountname} = req.body
    if(!email || !username || !password || !accountname ) return res.status(400).json({massage: "Missing required fields"})
    const IsUserDataExit = await User.findOne({email})
    if (IsUserDataExit) return res.status(401).json({massage:"User Already exit"})

    const HashPassword = await bcrytp.hash(password,15)
    const UserData = new  User({email,username,password:HashPassword,accountname})
    await UserData.save()
    res.status(200).json({UserData})
}


const LoginUserAccount = async (req,res)=>{
    const {email, username,password,} = req.body
    if(!email || !username || !password ) return res.status(400).json({massage: "Missing required fields"})
    //// CHEACK EMAILL OR ACCOUNT IS EXITS WITH TRY CAHC
    const UserData = await User.findOne({email})
    if(!UserData) return res.status(401).json({massage:"User not Exitets"})
    const ComparePassword = await bcrytp.compare(password,UserData.password)
    if (!ComparePassword) return res.status(401).json({massage:"PASS WORD IS NOT MATCH"})
    const Token = await jwt.sign({email,username},process.env.JWT_SECRET,{ expiresIn: 3600 })
    res.cookie("Token", Token)
    res.status(200).json({massanger:"LOGIN IS SUCCESFULL"})
}

const LogOutUserAccount = (req,res)=>{
    const {email, username,password,} = req.body
    if(!email || !username || !password ) return res.status(400).json({massage: "Missing required fields"})
    res.clearCookie("Token")
    res.status(200).json({massage:"LogOut Successfull"})
}

const DeletUserAccount = (req,res)=>{
    const {email, username,password,} = req.body
    if(!email || !username || !password ) return res.status(400).json({massage: "Missing required fields"})

}


module.exports= {CreateUserAccount,LoginUserAccount,LogOutUserAccount,DeletUserAccount }