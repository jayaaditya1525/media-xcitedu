import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import { login } from "../../redux/action/userActions";
import axios from 'axios';

const CreateBlog = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [blog, setBlog] = useState({
        userId: userInfo.data._id,
        title: "",
        type: "news",
        image: "",
        description: "",
        body: ""
    });
    let name, value;
    const handleChange = (e) => {
        console.log(blog);
        name = e.target.name;
        value = e.target.value;
        setBlog({ ...blog, [name]: value });
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem("token")

    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await fetch("https://mediabackend-xcitedu.herokuapp.com/blog/createBlog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                userId: blog.userId, title: blog.title, type: blog.type, image: blog.image, description: blog.description, body: blog.body
            })
        })
        const data = res.json()
        console.log(data);
        // dispatch(login(user.email, user.password));
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
                console.log(blog)

            });
    }
    useEffect(() => {
        if (!userInfo) {
            window.alert("Please login to write a blog")
            navigate("/login")
        }
    }, [userInfo, navigate]);

    return (
        <div className="Home-container">
            <Navbar pageName={'Login'} />
            CREATE BLOG
            <br />
            <form onSubmit={submitHandler}>
                <br /> Title
                <br /><input onChange={handleChange} type="text" name="title" />
                <br /><label for="blog">Type:</label>

                <br /><select onChange={handleChange} name="type" id="blog">
                    <option value="news">News</option>
                    <option value="business">Business</option>
                    <option value="sociology">Sociology</option>
                    <option value="tech">Tech</option>
                    <option value="economic">Economic</option>
                    <option value="other">Other</option>
                </select>
                <br />Image
                <br /><input onChange={uploadImage} type="file" name="image" />
                <br />description
                <br /><input onChange={handleChange} type="text" name="description" />
                <br />body
                <br /><textarea onChange={handleChange} type="text" name="body" />
                <br /><button type="submit">Post Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog
