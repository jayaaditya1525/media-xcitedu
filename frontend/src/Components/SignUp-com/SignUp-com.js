import axios from 'axios';
import './SignUp-com.css'
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUpAsUser = () => {
    const navigate = useNavigate();
    const [userSubmit,setUserSubmit] = useState({
        name : "",
        email : "",
        password : "",
        profilePicture : ""
    })


    const uploadImg = async(e) => {
        const formdata = new FormData();
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","mediaHouse");
        await axios.post("https://api.cloudinary.com/v1_1/xciteeducation/image/upload",formdata)
        .then((res) => {
            setUserSubmit({
                "name" : userSubmit.name,
                "email" : userSubmit.email,
                "password" : userSubmit.password,
                "profilePicture" : res.data.secure_url
            });

        })
    }

    


    const onUserSubmit = async(e) => {
        const {name,email,password,profilePicture} = userSubmit;
        e.preventDefault();
        if(!name || !email || !password){
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
                url : "http://localhost:8080/user/userRegister",
                headers : {
                    "Content-Type" : "application/json"
                },
                data : JSON.stringify({
                    name ,
                    email,
                    password,
                    profilePicture
                })
            }).then((res) => {
                // console.log(res);
                navigate('/login')
                
            }).catch((err) => {
                console.log(`Something Went Wrong : ${err}`);
                
            })
        }
        
    }



  return (
    <div className="divForUser__container center-row">
                <div className='divForUser__container-div'>
                <form onSubmit={onUserSubmit}>
                    <h2 className='cardTitle'>Register For User</h2>
                        <div className='input'>
                            <span>Enter Your Name*</span>
                            <input type="text" value={userSubmit.name} onChange={(e) => {
                                setUserSubmit({
                                    "name" : e.target.value,
                                    "email" : userSubmit.email,
                                    "password" : userSubmit.password,
                                    "profilePicture" : userSubmit.profilePicture
                                })
                            }} />
                        </div>
                        
                        <div className='input'>
                            <span>Enter Your Email*</span>
                            <input type="email"  onChange={(e) => {
                                setUserSubmit({
                                    "name" : userSubmit.name,
                                    "email" : e.target.value,
                                    "password" : userSubmit.password,
                                    "profilePicture" : userSubmit.profilePicture
                                })
                            }} value={userSubmit.email}/>
                        </div>

                        <div className='input'>
                            <span>Enter Your Password*</span>
                            <input type="password" onChange={(e) => {
                                setUserSubmit({
                                    "name" : userSubmit.name,
                                    "email" : userSubmit.email,
                                    "password" : e.target.value,
                                    "profilePicture" : userSubmit.profilePicture
                                })
                            }} value={userSubmit.password}/>
                        </div>

                        <div className="profile">
                            <span>Enter Your Avatar</span>
                            <input type="file"  accept='application/image' onChange={uploadImg}/>
                        </div>

                        <div className="button">
                            <input type="submit" value="register"/>
                        </div>
                    
                        <p className='extraLine'>Already On Media House? <a href='/login'>Login</a></p>
                    </form>
                </div>
            </div>
  )
}

export default SignUpAsUser