const express = require("express")
const { UserAuthMedelware } = require("./utilities/utilities")
const { CreateABlog, AllBlogGet , GetSigleBlog,UpdateBlog,DeleteBlog} = require("./utilities/BlogHandeler")

const BlogRouterHandeler = express.Router()

BlogRouterHandeler.post("/addblog",UserAuthMedelware,CreateABlog)
BlogRouterHandeler.get("/",AllBlogGet)
BlogRouterHandeler.get("/:id",GetSigleBlog)
BlogRouterHandeler.put("/:id",UserAuthMedelware,UpdateBlog)
BlogRouterHandeler.delete("/:id",UserAuthMedelware,DeleteBlog)


module.exports = {BlogRouterHandeler}