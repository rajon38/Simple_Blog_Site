const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title:{type:String, required: true},
    author:{type:String, required: true},
    content:{type:String, required: true},
    date: {type:Date, default:Date.now()}
},{versionKey:false});

const BlogModel = mongoose.model('blog', BlogSchema);
module.exports = BlogModel;