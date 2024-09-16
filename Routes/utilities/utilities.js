require("dotenv").config(0)
const jwt = require("jsonwebtoken")

const UserAuthMedelware = (req,res,next)=>{
    const Token = req.cookies.Token
    if(!Token) return res.status(401).json({massage:"YOU NEED LOGING"})
        try {
            const TokenDecoded = jwt.verify(Token,process.env.JWT_SECRET)
            req.user = TokenDecoded
        } catch (error) {
            return res.status(401).json({massage:"YOU NEED LOGING"})
        }
     next()
}


module.exports ={UserAuthMedelware }