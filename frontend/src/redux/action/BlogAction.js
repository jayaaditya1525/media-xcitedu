import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Blog_ActionType } from "../constant/Blog_Action-Type";
export const createBlogs = (blogs) => {
  return {
    type: Blog_ActionType.SET_CREATE_BLOGS,
    playload: blogs,
  };
};

export const createServiceBlogs = (blog) => async (dispatch) => {
  const token = localStorage.getItem("token");

  await axios
    .post(
      "https://mediabackend-xcitedu.herokuapp.com/blog/createBlog",
      JSON.stringify({
        userId: blog.userId,
        title: blog.title,
        type: blog.type,
        image: blog.image,
        description: blog.description,
        body: blog.body,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response", response.data.data);
      dispatch(createBlogs(response.data.data));
    });
};
