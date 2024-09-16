const  mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{type : String, require: true, unique: true,},
    username:{type : String,require: true, },
    password:{type : String, require: true, },
    accountname:{type : String, require: true,}
})


const User = mongoose.model('User', userSchema);
module.exports = User;