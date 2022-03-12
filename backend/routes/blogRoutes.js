const express = require("express");

const {
    createBlog,
    getAllBlogs,
    getAllBusinessBlogs,
    getAllAffiliateBlogs,
    getAllSociologyBlogs,
    getAllNewsBlogs,
    getAllTechBlogs,
    getAllEconomicBlogs,
    getBlogById,
    getAllOtherBlogs,
    getAllBlogsOfUser,
    likeBlog,
    removeLikeBlog
} = require("../controllers/blogControllers");

const {
    protect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new Blogs - Only for Users
// router.route("/createBlog").post(createBlog);
router.route("/createBlog").post(protect, createBlog);


// Get all Blogss
router.route("/allBlogs").get(getAllBlogs);

// Get all Business Blogs
router.route("/allBusinessBlogs").get(getAllBusinessBlogs);

// Get all Affiliate Blogs
router.route("/allAffiliateBlogs").get(getAllAffiliateBlogs);

// Get all Sociology Blogs
router.route("/allSociologyBlogs").get(getAllSociologyBlogs);

// Get all News Blogs
router.route("/allNewsBlogs").get(getAllNewsBlogs);

// Get all Tech Blogs
router.route("/allTechBlogs").get(getAllTechBlogs);

// Get all Economic Blogs
router.route("/allEconomicBlogs").get(getAllEconomicBlogs);

// Get all Other Blogs
router.route("/allOtherBlogs").get(getAllOtherBlogs);

// Get a particular Blog by id
router.route("/oneBlog/:id").get(getBlogById);

// Get all Blogss by id
router.route("/allBlogs/:id").get(protect, getAllBlogsOfUser);

// Like blog
router.post("/likeBlog",likeBlog);

// removelike blog
router.post("/removeLikeBlog",removeLikeBlog);



module.exports = router;