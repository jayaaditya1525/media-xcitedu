import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import { login } from "../../redux/action/userActions";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    let name, value;
    const handleChange = (e) => {
        console.log(user);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(user.email, user.password));
    };
    useEffect(() => {
        if (userInfo) {

            navigate("/home");
        }
    }, []);
    return (
        <div className="Home-container">
            <Navbar pageName={'MainPage'} />
            LOGIN FORM<br />
            <form onSubmit={submitHandler}>
                Email
                <br />
                <input type="email" name="email" onChange={handleChange} />
                <br />
                password
                <br />
                <input type="password" name="password" onChange={handleChange} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
