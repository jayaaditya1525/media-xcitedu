import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SignUpAsJoun = () => {
    const navigate = useNavigate();
    const [jounSubmit,setJounSubmit] = useState({
        name : "",
        email : "",
        password : "",
        profilePicture : "",
        resume : ""
    })


    const uploadImg = async(e) => {
        const formdata = new FormData();
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","mediaHouse");
        await axios.post("https://api.cloudinary.com/v1_1/webdevoliva/image/upload",formdata)
        .then((res) => {
            setJounSubmit({
                "name" : jounSubmit.name,
                "email" : jounSubmit.email,
                "password" : jounSubmit.password,
                "profilePicture" : res.data.secure_url,
                "resume" : jounSubmit.resume
            });
        })
    }
    
    const uploadResume = async(e) => {
        const formdata = new FormData();
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","mediaHouse");
        await axios.post("https://api.cloudinary.com/v1_1/webdevoliva/image/upload",formdata)
        .then((res) => {
            setJounSubmit({
                "name" : jounSubmit.name,
                "email" : jounSubmit.email,
                "password" : jounSubmit.password,
                "profilePicture" : jounSubmit.profilePicture,
                "resume" : res.data.secure_url
            });
        }).catch((error) => {
            console.log(`something went wrong : ${error}`);
        })
    }

    


    const onJounSubmit = async(e) => {
        const {name,email,password,profilePicture,resume} = jounSubmit;
        e.preventDefault();
        if(!name || !email || !password || !resume){
            console.log(`Please Fill Up All Fields`);
        }else if(name.length < 4 ){
            console.log("Name Should be grater or equal to 4 char");
        }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            console.log("Please Enter Your Correct Email");
        }else if(password.length < 8){
            console.log("Password should be grater than or equal to 8 char.");
        }else{
            await axios({
                method : "POST",
                url : "http://localhost:8080/admin/journalist",
                headers : {
                    "Content-Type" : "application/json"
                },
                data : JSON.stringify({
                    name,
                    email,
                    password,
                    resume,
                    profilePicture
                })
            }).then((res) => {
                console.log(res);
                navigate('/login')
            }).catch((err) => {
                console.log(`Something Went Wrong : ${err}`);
            })   
        }
    }



  return (
    <div className="divForGen">
                <div>
                    <span className='cardTitle'>Register For Journalist</span>
                    <span className="cardDescription">Resgister your account as a journalist.</span>
                </div>
                <form onSubmit={onJounSubmit}>

                        <div className='input'>
                            <input type="text" placeholder='Enter Your Name*' value={jounSubmit.name} onChange={(e) => {
                                setJounSubmit({
                                    "name" : e.target.value,
                                    "email" : jounSubmit.email,
                                    "password" : jounSubmit.password,
                                    "profilePicture" : jounSubmit.profilePicture
                                })
                            }} />
                        </div>
                        
                        <div className='input'>
                            <input type="email" placeholder='Enter Your Email*'  onChange={(e) => {
                                setJounSubmit({
                                    "name" : jounSubmit.name,
                                    "email" : e.target.value,
                                    "password" : jounSubmit.password,
                                    "profilePicture" : jounSubmit.profilePicture
                                })
                            }} value={jounSubmit.email}/>
                        </div>

                        <div className='input'>
                            <input type="password" placeholder='Enter Your Password*' onChange={(e) => {
                                setJounSubmit({
                                    "name" : jounSubmit.name,
                                    "email" : jounSubmit.email,
                                    "password" : e.target.value,
                                    "profilePicture" : jounSubmit.profilePicture
                                })
                            }} value={jounSubmit.password}/>
                        </div>

                        <div className="profile">
                            <label htmlFor="Upload Your Profile Image">Upload Your Profile Image</label>
                            <input type="file"  onChange={uploadImg}/>
                        </div>
                        <div className="resume">
                            <label htmlFor="Upload Your Profile Resume">Upload Your Profile Resume*</label>
                            <input type="file" accept='application/pdf'   onChange={uploadResume}/>
                        </div>

                        <div className="submit">
                            <input type="submit" value="register"/>
                        </div>
    
                    </form>
                    <div className="hr"></div>
                    <p className='extraLine'>Already On Media House? <a href='/login'>Login</a></p>
                </div>
  )
}

export default SignUpAsJoun