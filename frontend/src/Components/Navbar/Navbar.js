import React, { useState } from 'react'
import MainNavbar from './MainNavbar/MainNavbar'
import './Navbar.css'
import PreNavbar from './PreNavbar/PreNavbar'
import MoreNavbar from './MoreNavbar/MoreNavbar'

const Navbar = ({pageName}) => {

  // More Navbar Hide & show Controller
  const [show, setShow] = useState("hide");
    const moreBarController = (isActive) => {
      setShow(isActive === true ? "show" : "hide");
    }

  return (
    <>
    {pageName !== "MainPage" ? 
    <>
      <div className="Navbar-container">
      <PreNavbar moreBarController={moreBarController}/>
      <MoreNavbar isShow={show} />
      <MainNavbar heading={pageName}/>
      </div>  
    </>
    :
    <>
      <div className="Navbar-container">
      <PreNavbar moreBarController={moreBarController} background={"active"}/>
      <MoreNavbar isShow={show} stable={"active"}/>
      </div>  
    </>
    }
    </>
  )
}

export default Navbar