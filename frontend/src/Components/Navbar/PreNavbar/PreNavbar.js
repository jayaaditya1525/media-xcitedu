import React, { useState } from 'react'
import './PreNavbar.css'
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/action/userActions';
import { useDispatch, useSelector } from 'react-redux';
const PreNavbar = ({ moreBarController, background }) => {
  const [searchData, setSearchData] = useState("");
  const [moreBar, setMoreBar] = useState(true);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  return (
    <div className={!userInfo ? "preNavbar-container center-row-left-right" : "preNavbar-container center-row-left" } id={background}>
      <Link to={"/"}><span className='web-logo center-row' id={userInfo ? "logged" : "notLogged"}><img src="https://i.ibb.co/Cb51LQ2/logo-Xcite.jpg" className='web-logo__img' alt="web-logo" /> | <span className="web-logo__name">Media House.</span></span></Link>
      {userInfo ? (
        <>
          {/* <p>Welcome {userInfo.data.name}</p>
          <button onClick={handleLogout}>Logout</button> */}
          <Link to={"/createblog"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Create Blog</span></span></Link>
          <Link to={"/home"}><span className='user-aacount-container center-row preNavbar-navLink'><ion-icon name="person-circle-outline"></ion-icon><span className='navLink'>Your</span></span></Link>
          <Link to={"/home"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Home</span></span></Link>
          <Link to={"/News"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>News</span></span></Link>
          <Link to={"/Business"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Business</span></span></Link>
          <Link to={"/Sociology"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Sociology</span></span></Link>
          <Link to={"/Tech"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Tech</span></span></Link>
          <Link to={"/Economic"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Economic</span></span></Link>
          <Link to={"/Other"}><span className='pages-navLink center-row preNavbar-navLink'><span className='navLink'>Other</span></span></Link>
          <span className='moreBar-container center-row-left-right preNavbar-navLink' id={moreBar !== true ? "active" : null} onClick={() => { setMoreBar(!moreBar); moreBarController(moreBar) }}><span className='navLink'>More</span> <ion-icon name="caret-down-outline"></ion-icon></span>
          <div className='searchNews-Input center-row'><input type="text" placeholder='Search...' value={searchData} onChange={(e) => { setSearchData(e.target.value) }} /><span className="searchNews-Input__icon center-row"><ion-icon name="search-outline"></ion-icon></span></div>
        </>
      ) : (
        <>
          <div className='center-row'>
            <Link to={"/login"}><span className='user-login-container center-row preNavbar-navLink'><span className='navLink'>Login</span></span></Link>
            <Link to={"/signup"}><span className='user-signup-container center-row preNavbar-navLink'><span className='navLink'>Signup</span></span></Link>
          </div>
        </>
      )}
    </div>
  )
}

export default PreNavbar