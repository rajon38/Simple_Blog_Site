const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email:{type:String,trim: true,required: true,unique:true},
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String,required: true, min: 6, max: 64,},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});

const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel;