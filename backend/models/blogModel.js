const mongoose = require("mongoose");
// const User = require("./userModel")

const blogSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: "other"
        },
        tags : [
            {
                type: String,
                default : "news"
            }
        ],
        likes : [
            {
                type : String,
            }
        ],
        image: {
            type: String,
            required: true,
            default: "https://media.istockphoto.com/photos/top-view-of-a-blue-desktop-with-copy-space-picture-id1278436436?b=1&k=20&m=1278436436&s=170667a&w=0&h=QrFR5_k1AKgs-1ypGE0QhqHQlqZzBYbtVafn7rD8sUQ="
        },
        description: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true,
    }
);




const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
