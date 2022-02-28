import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from "../../redux/action/userActions"


const Signup = () => {
    const userRegister = useSelector((state) => state.userRegister);
    const { userRegisterInfo } = userRegister;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (userRegisterInfo) {
            navigate("/login");
        }
    }, [userRegisterInfo, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //   setMessage("Passwords do not match");
        // } else {
        //   //dispatch
        //   dispatch(register(name, email, password));
        // }
        dispatch(register(user.name, user.email, user.password, user.linkedin, user.isEmployer, user.certificateOfIncorporation, user.pancard, user.gst, user.mobile, user.github, user.description, user.resume, user.profilePicture, user.education, user.location, user.website));

    };
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        description: "",
        profilePicture: ""
    });
    const uploadProfilePicture = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "ih1rthv8");
        await axios
            .post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formData)
            .then((response) => {
                // console.log(response.data.secure_url);
                setUser({ ...user, profilePicture: response.data.secure_url });
                console.log(user)

            });
    }

    let name, value;
    const handleChange = (e) => {
        console.log(user);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    return (
        <div className="Home-container">
            <Navbar pageName={'Signup'} />
            <h1>SIGNUP</h1>
            <form onSubmit={submitHandler}>
                <br /> name
                <br /><input onChange={handleChange} type="text" name="name" />
                <br />email
                <br /><input onChange={handleChange} type="email" name="email" />
                <br />password
                <br /><input onChange={handleChange} type="password" name="password" />
                <br /> description
                <br /> <input onChange={handleChange} type="text" name="description" />
                <br /> profilePicture
                <br /> <input onChange={uploadProfilePicture} type="file" name="profilePicture" />
                <br /><button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup