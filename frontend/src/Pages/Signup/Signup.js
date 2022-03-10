import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from "../../redux/action/userActions"
import './Signup.css'
import PerLoader from '../../Components/PerLoader/PerLoader';
import SignUpAsUser from '../../Components/SignUp-com/SignUp-com';
import SignUpAsJoun from '../../Components/SignUp-com/SignUpAsJoun';

const Signup = () => {

        return (
        <div className="Home-container">
            <Navbar pageName={"MainPage"} />
            <div className="signUp-container">
                <SignUpAsUser />
                <div className="imgBx">
                    <img src={`https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} alt={`Register User`} />
                </div>
            </div>
        </div>
    )
}

export default Signup