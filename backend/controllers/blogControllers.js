const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

/*
LIST OF CONTROLLERS
1. Create a new Blog 
2. Get all Blogs - for every user
3. Get all frontend Blogs - for every user
4. Get all backend Blogs - for every user
5. Get all database Blogs - for every user
6. Get all fullstack Blogs - for every user
7. Get all designing Blogs - for every user
8. Get Details of Blog by ID
9. Pay using Razorpay
10. Get details of all Other Blogs
11. Add a chapter
*/


// create blog
const createBlog = asyncHandler(async (req, res) => {
    const {userId,title,type,tags,image,description,body} = req.body;
    await Blog.create({
        userId,
        title,
        type,
        tags,
        image,
        description,
        body
    }).then((data) => {
        res.status(200).json({
            success : true,
            message : "Blog Created Succefully",
            data
        })
    }).catch((err) => {
        console.log(`Error : ${err}`);
    })
})

// like to blog
const likeBlog = asyncHandler(async (req,res) => {
    const {userId,blogId} = req.body;
    await Blog.findByIdAndUpdate({_id : blogId},{$push : {likes : userId}})
    .then((blog) => {
        res.status(200).json({
            success : true,
            message : "Blog found & liked",
        })
    }).catch((err) => {
        res.status(400).json({
            success : false,
            message : "Blog not found",
            Error : err
        })
    })

})

// like to blog
const removeLikeBlog = asyncHandler(async (req,res) => {
    const {userId,blogId} = req.body;
    await Blog.findByIdAndUpdate({_id : blogId},{$pull : {likes : userId}})
    .then((blog) => {
        res.status(200).json({
            success : true,
            message : "Blog found & remove like",
        })
    }).catch((err) => {
        res.status(400).json({
            success : false,
            message : "Blog not found",
            Error : err
        })
    })

})

// Get details of all Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({});
    if (Blogs.length > 0) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
        // console.log("All Blogs found");
        // console.log();
    } else {
        res.status(200).json({
            success: false,
            data: "No Blog found",
        });
    }
});

// Get details of all Frontend Blogs
const getAllBusinessBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Business" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Business Blog found",
        });
    }
});

// Get details of all Backend Blogs
const getAllAffiliateBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Affiliate" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Affiliate Blog found",
        });
    }
});

// Get details of all Database Blogs
const getAllSociologyBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Sociology" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Sociology Blog found",
        });
    }
});

// Get details of all Fullstack Blogs
const getAllNewsBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "news" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});

// Get details of all Designing Blogs
const getAllTechBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Tech" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Tech Blog found",
        });
    }
});

// Get details of all Designing Blogs
const getAllEconomicBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Economic" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Economic Blog found",
        });
    }
});

// Get details of all Other Blogs
const getAllOtherBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "Other" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Other Blog found",
        });
    }
});

// Get details of Blog by ID
const getBlogById = asyncHandler(async (req, res) => {
    const foundBlog = await Blog.findById(req.params.id);
    if (foundBlog) {
        // console.log("Particular Blog details", Blog)
        res.status(200).json({
            success: true,
            data: foundBlog,
        });
        console.log("Particular Blog details", foundBlog);
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

// Get all Blogs by ID
const getAllBlogsOfUser = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ userId: req.params.id });
    if (Blogs) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

// Get all Blogs by instructor
const getAllBlogsOfEmployer = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ employerId: req.params.id });
    console.log("Hello testing");
    if (Blogs) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

module.exports = {
    createBlog,
    getAllBlogs,
    getAllBusinessBlogs,
    getAllAffiliateBlogs,
    getAllTechBlogs,
    getAllSociologyBlogs,
    getAllNewsBlogs,
    getAllEconomicBlogs,
    getAllOtherBlogs,
    getBlogById,
    getAllBlogsOfUser,
    getAllBlogsOfEmployer,
    likeBlog,
    removeLikeBlog
};