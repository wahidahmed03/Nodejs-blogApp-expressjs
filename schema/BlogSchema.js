const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    blogId: { type: String, require:true },
    title: { type: String, required: true },
    description: { type: String, required: true }, 
    createDate: { type: Date, default: Date.now }, 
    writerName: { type: String, required: true },
    writerEmail: { type: String, required: true }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
