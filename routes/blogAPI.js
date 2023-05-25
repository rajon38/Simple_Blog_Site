const express = require('express');
const AuthVerify = require("../middleware/AuthVerify");
const {
    CreateBlogPost,
    GetAllBlogPost,
    GetBlogPostByID
} = require("../controller/blogController")

const router = express.Router();

router.post("/CreateBlog",AuthVerify,CreateBlogPost)
router.get("/GetAllBlogPost",AuthVerify,GetAllBlogPost)
router.get("/GetBlogPostByID/:id",AuthVerify,GetBlogPostByID);

module.exports = router;