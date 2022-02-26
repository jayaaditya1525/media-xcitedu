import React from 'react'
import { Link } from 'react-router-dom'
import './MoreNavbar.css'

const MoreNavbar = ({isShow,stable}) => {
  return (
    <div className={`moreNavbar-container center-row-left ${stable}`} id={isShow}>
        <span className='moreBar-container__heading'>More</span>
        <Link to={"/"}><span className="moreBar-container__navlink">Music</span></Link>
        <Link to={"/"}><span className="moreBar-container__navlink">TV</span></Link>
        <Link to={"/"}><span className="moreBar-container__navlink">Weather</span></Link>
        <Link to={"/"}><span className="moreBar-container__navlink">Sound</span></Link>
    </div>
  )
}

export default MoreNavbar   