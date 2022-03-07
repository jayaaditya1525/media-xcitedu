import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from "../../redux/action/userActions"
import './Signup.css'
import PerLoader from '../../Components/PerLoader/PerLoader';
import SignUpAsUser from '../../Components/SignUp/SignUpAsUser';
import SignUpAsJoun from '../../Components/SignUp/SignUpAsJoun';

const Signup = () => {
    // const [active,setActive] = useState(false);
    // const userRegister = useSelector((state) => state.userRegister);
    // const { userRegisterInfo } = userRegister;
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     if (userRegisterInfo) {
    //         navigate("/login");
    //     }
    // }, [userRegisterInfo, navigate]);

    // const makeActive = () => {
    //     setActive(true);
    //     console.log(active);
    // }
    
    // const makeUnActive = () => {
    //     setActive(false);
    //     console.log(active);
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // if (password !== confirmPassword) {
    //     //   setMessage("Passwords do not match");
    //     // } else {
    //     //   //dispatch
    //     //   dispatch(register(name, email, password));
    //     // }
    //     dispatch(register(user.name, user.email, user.password, user.linkedin, user.isEmployer, user.certificateOfIncorporation, user.pancard, user.gst, user.mobile, user.github, user.description, user.resume, user.profilePicture, user.education, user.location, user.website));

    // };
    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     isAdmin: false,
    //     description: "",
    //     profilePicture: ""
    // });
    // const uploadProfilePicture = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file", e.target.files[0]);
    //     formData.append("upload_preset", "ih1rthv8");
    //     await axios
    //         .post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formData)
    //         .then((response) => {
    //             // console.log(response.data.secure_url);
    //             setUser({ ...user, profilePicture: response.data.secure_url });
    //             console.log(user)

    //         });
    // }

    // let name, value;
    // const handleChange = (e) => {
    //     console.log(user);
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ...user, [name]: value });
    // };


        return (
        <div className="Home-container">
            <Navbar pageName={"MainPage"} />
            <div className="signUp-container">
            <SignUpAsJoun />

            <div className='OR'>or</div>

            <SignUpAsUser />
                
                
            </div>
        </div>
    )
}

export default Signup