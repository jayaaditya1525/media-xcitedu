import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import { login } from "../../redux/action/userActions";
import "./Login.css";

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
        console.log("Login dispatch");
    };
    useEffect(() => {
        if (userInfo) {

            navigate("/");
            console.log("LoggedIn");
            console.log(userInfo);
        }
    }, [userInfo, navigate]);
    return (
        <div className="Home-container">
            <Navbar pageName={'MainPage'} />
            <section className="login_section">
            <div className="imgbx">
            <img
            src="https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="new"
            />
            </div>
            <div className="contentBx">
            <div className="formBx">
            <h2>Sign In</h2>
            <form onSubmit={submitHandler}>
            <div className="inputbx">
            <span>Email*</span>
            <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="inputbx">
            <span>password*</span>
            <input
            type="password"
            name="password"
            onChange={handleChange}
            />
            </div>
            <div className="remember">
            <label>
            <input type="checkbox" name="" />
            Remember me
            </label>
            </div>
            <div className="inputbx">
            <button type="submit">Login</button>
            </div>
            <div className="inputbx">
            <p>
            Don't have an account? <Link to="/signup">Signup</Link>
            </p>
            </div>
            </form>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Login
