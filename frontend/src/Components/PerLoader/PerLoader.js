import React from 'react'
import './PerLoader.css'
const PerLoader = ({hide}) => {
  return (
    <>
    
        <div className="PerLoaderForMainPage center-row" id={hide === true ? "hide" : null}>
          <div className="navbar">
            <nav className='center-row-left-right'>
              <div className='center-row'>
                <div className="box"></div>
                <div className="textBx"></div>
              </div>
              <div className='center-row'>
                <div className="minTextBx"></div>
                <div className="minTextBx"></div>
                <div className="minTextBx"></div>
                <div className="minTextBx"></div>
                <div className="minTextBx"></div>
              </div>
              <div className='center-row'>
                <div className="minCricle"></div>
                <div className="minCricle"></div>
              </div>
            </nav>
          </div>
            <div className="imgBx center-row">
                <img src="https://res.cloudinary.com/webdevoliva/image/upload/a_45/v1646047123/loader/superhero_txbvkn.png" alt="" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="text">Redirecting</span>
        </div>
    </>
  )
}

export default PerLoader