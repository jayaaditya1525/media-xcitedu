import React from 'react'
import './PerLoader.css'
const PerLoader = ({hide}) => {
  return (
    <>
        <div className="PerLoaderForMainPage center-row" id={hide === true ? "hide" : null}>
            <div className="imgBx center-row">
                <img src="https://i0.wp.com/www.rankred.com/wp-content/uploads/2017/06/redirecting-loader.gif?resize=650%2C286" alt="" />
            </div>
        </div>
    </>
  )
}

export default PerLoader