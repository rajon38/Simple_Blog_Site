const DataModel = require("../models/BlogModel")
const {BlogCreateService} = require("../services/common/CreateService");
const {AllBlogDetailsService} = require("../services/blog/AllBlogDetailsService");
const {BlogDetailsByIDService} = require("../services/blog/BlogDetailsByIDService");


exports.CreateBlogPost = async (req,res) => {
    let Result = await BlogCreateService(req,DataModel);
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