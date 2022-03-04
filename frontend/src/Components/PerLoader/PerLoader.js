import React from 'react'
import './PerLoader.css'
const PerLoader = ({hide}) => {
  return (
    <>
    
        <div className="PerLoaderForMainPage center-row" id={hide === true ? "hide" : null}>
            <div className="imgBx center-row">
                <img src="https://res.cloudinary.com/webdevoliva/image/upload/v1646309554/loader/imgonline-com-ua-Rotate360-K8StPNMDzeew_gbssub.png" alt="superman" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="text">Loading...</span>
        </div>
    </>
  )
}

export default PerLoader