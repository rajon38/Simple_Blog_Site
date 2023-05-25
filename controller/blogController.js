const DataModel = require("../models/BlogModel")
const {CreateService} = require("../services/common/CreateService");
const {AllBlogDetailsService} = require("../services/blog/AllBlogDetailsService");
const {BlogDetailsByIDService} = require("../services/blog/BlogDetailsByIDService");
const {BlogUpdateByIDService} = require("../services/blog/BlogUpdateByIDService");
const {BlogDeleteByIDService} = require("../services/blog/BlogDeleteByIDService");


exports.CreateBlogPost = async (req,res) => {
    let Result = await CreateService(req,DataModel);
    res.status(200).json(Result);
}

exports.GetAllBlogPost = async (req,res) => {
    let Result = await AllBlogDetailsService(req, DataModel);
    res.status(200).json(Result);
}

exports.GetBlogPostByID = async (req, res) => {
    let Result = await BlogDetailsByIDService(req, DataModel);
    res.status(200).json(Result);
}

exports.UpdateBlogByID = async (req,res) => {
    let Result = await BlogUpdateByIDService(req, DataModel);
    res.status(200).json(Result);
}

exports.DeleteBlogByID = async (req,res) => {
    let Result = await BlogDeleteByIDService(req, DataModel);
    res.status(200).json(Result);
}