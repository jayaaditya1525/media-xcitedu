import React, { useState } from 'react'
import './MainNavbar.css'
import { Link, NavLink } from 'react-router-dom'

const MainNavbar = ({ heading }) => {
  // Show More Controller
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mainNavbar-container">
      <span className='mainNavbar-container__pageName'>{heading}</span>
      <div>
        <NavLink to={'/Home'} className='mainNavbar-container__navLinks' activeClassName="active">Home</NavLink>
        <NavLink to={'/Coronavirus'} className='mainNavbar-container__navLinks' activeClassName="active">Coronavirus</NavLink>
        <NavLink to={'/Climate'} className='mainNavbar-container__navLinks' activeClassName="active">Climate</NavLink>
        <NavLink to={'/Video'} className='mainNavbar-container__navLinks' activeClassName="active">Video</NavLink>
        <NavLink to={'/World'} className='mainNavbar-container__navLinks' activeClassName="active">World</NavLink>
        <NavLink to={'/Aisa'} className='mainNavbar-container__navLinks' activeClassName="active">Aisa</NavLink>
        <NavLink to={'/UK'} className='mainNavbar-container__navLinks' activeClassName="active">UK</NavLink>
        <NavLink to={'/Business'} className='mainNavbar-container__navLinks' activeClassName="active">Business</NavLink>
        <NavLink to={'/Tech'} className='mainNavbar-container__navLinks' activeClassName="active">Tech</NavLink>
        <NavLink to={'/Science'} className='mainNavbar-container__navLinks' activeClassName="active">Science</NavLink>
        <NavLink to={'/Stories'} className='mainNavbar-container__navLinks' activeClassName="active">Stories</NavLink>
        <NavLink to={'/Entertainment&Arts'} className='mainNavbar-container__navLinks' activeClassName="active">Entertainment & Arts</NavLink>
        <NavLink to={'/Health'} className='mainNavbar-container__navLinks' activeClassName="active">Health</NavLink>
        <NavLink to={'/worldNewsTv'} className='mainNavbar-container__navLinks' activeClassName="active">World News TV</NavLink>
        <span className='mainNavbar-container__navLinks mainNavbar-container__navLinks-showMore center-row' onClick={() => { setShowMore(!showMore) }}>More<span className='mainNavbar-container__navLinks-icon'><ion-icon name="caret-down-outline"></ion-icon></span></span>
      </div>
      <div className="mainNavbar-container__moreItem center-row" id={showMore === true ? "show" : "hide"}>
        <Link to={"/"}><span className="mainNavbar-container__moreItem-navLinks">More Item</span></Link>
      </div>
    </div>
  )
}

export default MainNavbar