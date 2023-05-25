const DataModel = require("../models/UserModel");
const OTPModel = require("../models/OTPModel")

const {CreateService} = require("../services/common/CreateService");
const {UserUpdateService} = require("../services/users/UserUpdateService");
const {UserDetailsService} = require("../services/users/UserDetailsService");
const {UserLoginService} = require("../services/users/UserLoginService");
const {UserVerifyEmailService} = require("../services/users/UserVerifyEmailService");
const {UserVerifyOtpService} = require("../services/users/UserVerifyOtpService");
const {UserResetPassService} = require("../services/users/UserResetPassService");

exports.Registration = async (req,res) => {
    let Result = await CreateService(req,DataModel);
    res.status(200).json(Result);
}

exports.Login = async (req,res) =>{
    let Result = await UserLoginService(req, DataModel)
    res.status(200).json(Result);
}

exports.ProfileUpdate = async (req,res) => {
    let Result = await UserUpdateService(req,DataModel);
    res.status(200).json(Result);
}

exports.ProfileDetails = async (req,res) => {
    let Result = await UserDetailsService(req, DataModel);
    res.status(200).json(Result);
}

exports.RecoverVerifyEmail = async (req, res) => {
    let Result = await UserVerifyEmailService(req,DataModel)
    res.status(200).json(Result);
}

exports.RecoverVerifyOTP = async (req,res) =>{
    let Result = await UserVerifyOtpService(req,OTPModel);
    res.status(200).json(Result);
}

exports.RecoverResetPass = async (req,res) => {
    let Result = await UserResetPassService(req,DataModel);
    res.status(200).json(Result);
}