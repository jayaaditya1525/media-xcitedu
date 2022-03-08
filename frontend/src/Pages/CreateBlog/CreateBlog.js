import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { createServiceBlogs } from "../../redux/action/BlogAction";
import "./CreateBlog.css";
const CreateBlog = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [blog, setBlog] = useState({
    userId: userInfo.data._id,
    title: "",
    type: "news",
    image: "",
    description: "",
    body: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit handler", blog);
    dispatch(createServiceBlogs(blog));
    navigate("/");
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "ih1rthv8");
    await axios
      .post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formData)
      .then((response) => {
        // console.log(response.data.secure_url);
        setBlog({ ...blog, image: response.data.secure_url });
        console.log(blog);
      });
  };
  useEffect(() => {
    if (!userInfo) {
      window.alert("Please login to write a blog");
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <div className="Home-container">
      <Navbar pageName={"Login"} />

      <br />
      <div className="CreateBlog_container">
        <form onSubmit={submitHandler} className="create_box">
          <br />
          <h2>CREATE BLOG</h2>
          <br /> Title
          <br />
          <input onChange={handleChange} type="text" name="title" />
          <br />
          <label for="blog">Type:</label>
          <br />
          <select onChange={handleChange} name="type" id="blog">
            <option value="news">News</option>
            <option value="business">Business</option>
            <option value="sociology">Sociology</option>
            <option value="tech">Tech</option>
            <option value="economic">Economic</option>
            <option value="other">Other</option>
          </select>
          <br />
          Image
          <br />
          <input
            onChange={uploadImage}
            type="file"
            name="image"
            className="upload_file"
          />
          <br />
          description
          <br />
          <input onChange={handleChange} type="text" name="description" />
          <br />
          body
          <br />
          <textarea onChange={handleChange} type="text" name="body" />
          <br />
          <button className="createBlog_btn" type="submit">
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
