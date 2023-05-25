const express = require('express');
const AuthVerify = require("../middleware/AuthVerify");
const {
    CreateBlogPost,
    GetAllBlogPost,
    GetBlogPostByID,
    UpdateBlogByID,
    DeleteBlogByID
} = require("../controller/blogController")

const router = express.Router();

router.post("/CreateBlog",AuthVerify,CreateBlogPost);
router.get("/GetAllBlogPost",GetAllBlogPost);
router.get("/GetBlogPostByID/:id",GetBlogPostByID);
router.post("/UpdateBlogByID/:id",AuthVerify,UpdateBlogByID);
router.get("/DeleteBlogPostByID/:id",AuthVerify,DeleteBlogByID);

module.exports = router;