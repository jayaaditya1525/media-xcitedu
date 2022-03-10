import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import { login } from "../../redux/action/userActions";
import axios from 'axios';

const CreateBlog = () => {
    const userLogin = useSelector((state) => state.userLogin);

    const [getTags,setGetTags] = useState("");
    const [allTags,setAllTags] = useState([]);

    const [blogData,setBlogData] = useState({
        "title" : "",
        "type" : "news",
        "image" :  "",
        "description" : "",
        "body" : ""
    })


    const addTag = () => {
        let exist = "";
        allTags.map((e) => {
            if(e===getTags){
                exist = e
            }
        })
        if(exist){
            setAllTags([...allTags])
            console.log(`already have`);
        }else if(getTags.includes("#")){
            const edited = getTags.replace("#","");
            setAllTags([...allTags,edited]);
            console.log(`edited  : ${edited}`);
        }else{
        setAllTags([...allTags,getTags]);
        }
        setGetTags(" ");
    }

    
    
    const navigate = useNavigate();
    
    
    
    
    // Taking User Info
    const { userInfo } = userLogin;
    // Taking Token
    const token = localStorage.getItem("token");
    
    const uploadImg = async(e) => {
        const formdata = new FormData();
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","ih1rthv8")
        await axios.post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formdata).then((res) => {
            setBlogData({...blogData, image : res.data.secure_url});
        }).catch((err) => {
            console.log(err);
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if(allTags.length === 0){
            setAllTags([...allTags,"News"])
        }else{
            setAllTags([...allTags])
        }

        const postBlog = JSON.stringify({
                "userId" : userInfo.data._id,
                "title" : blogData.title,
                "type" : blogData.type,
                "tags" : allTags,
                "image" : blogData.image,
                "description" : blogData.description,
                "body" : blogData.body
        })

        await axios({
            method : "POST",
            url : "http://localhost:8080/blog/createBlog",
            headers : {
                "Content-Type" : "application/json",
            },
            data : postBlog
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(`Something Went Wrong : ${err}`);
        })
    };

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
                <br /><input onChange={(e) => setBlogData({
                    ...blogData,title:e.target.value
                })} type="text" name="title" />
                <br /><label for="blog">Type:</label>

                <br /><select onChange={(e) => setBlogData({
                    ...blogData,type:e.target.value
                })} name="type" id="blog">
                    <option value="news">News</option>
                    <option value="business">Business</option>
                    <option value="sociology">Sociology</option>
                    <option value="tech">Tech</option>
                    <option value="economic">Economic</option>
                    <option value="other">Other</option>
                </select>
                <br />Image
                <br /><input type="file" onChange={uploadImg}/>
                <br />description
                <br /><input type="text" name="description" onChange={(e) => setBlogData({
                    ...blogData, description :e.target.value
                })}/>
                <br />body
                <br /><textarea type="text" name="body" onChange={(e) => setBlogData({
                    ...blogData, body :e.target.value
                })}/>
                <br />tags
                <br/>
                <div style={{width:"200px",height:"80px",border:"1px solid #111"}}>
                    {
                        allTags.map((e) => {
                            return(
                                <>
                                    <span> #{e}</span>
                                </>
                            )
                        })
                    }
                </div>
                <input type="text" placeholder={"Add Tags ex. #coronavirus"} style={{width:"400px"}} onChange={(e) => {setGetTags(e.target.value);console.log(getTags);}}/> <input type="button" value="Add Tag" onClick={addTag}/>
                <br /><button type="submit">Post Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog
