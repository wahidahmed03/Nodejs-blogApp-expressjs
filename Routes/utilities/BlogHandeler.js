
const BlogCreate = require("../../schema/BlogSchema")
const User = require("../../schema/UserSchema")


const AllBlogGet = async (req,res)=>{
    try {
        const allBlogs = await BlogCreate.find();
        res.send(allBlogs)
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "An error occurred while updating the blog", error: error.message });
    }

}

const GetSigleBlog = async (req,res)=>{
    const blogId = req.params.id

    try {
        const blog = await BlogCreate.findOne({blogId})
        if(!blog) return res.status(404).json({massage :"Blog not found"})
        res.status(200).json(blog)
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "An error occurred while updating the blog", error: error.message });
    }

}

const CreateABlog= async (req,res)=>{
    const {title,description}  =req.body
    const {email, username} = req.user
    try {
        const UserData = await User.findOne({email})
        const allBlogs = await BlogCreate.find()
        const Blog = new  BlogCreate({blogId:allBlogs.length, title,description,writerName:UserData.accountname,writerEmail:email})
        Blog.save()
        res.status(200).json({Blog})
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "An error occurred while updating the blog", error: error.message });
    }

}

const UpdateBlog = async (req,res)=>{
    const blogId = req.params.id;
    const { title, description } = req.body;
    try {
        const existingBlog = await BlogCreate.findOne({blogId})
        if (!existingBlog) return res.status(404).json({ message: "Blog not found" });
        const updateBlogData = { title, description };
        const updatedBlog = await BlogCreate.findByIdAndUpdate(existingBlog._id, updateBlogData, { new: true, runValidators: true });
        res.status(200).json({ message: "Blog updated successfully",updatedBlog});
    } catch (error) {
        console.error("Error updating blog:", error);
       res.status(500).json({ message: "An error occurred while updating the blog", error: error.message });
    }
}
const DeleteBlog = async (req,res)=>{
  const blogId = req.params.id;
  try {
     const ExitsBlog = await BlogCreate.findOne({blogId})
    if (!ExitsBlog) return  res.status(404).json({ message: "Blog not found" });
    const Delet= await BlogCreate.findByIdAndDelete({blogId})
    res.status(200).json({massage:"Delete Blog Successfully",Delet})
  } catch (error) {
    
  }
}


module.exports = {CreateABlog,AllBlogGet,GetSigleBlog,UpdateBlog,DeleteBlog }