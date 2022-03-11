import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import './MainPage__topHeadings.css'
const MainPage__topHeadings = () => {
        // Get Data From Store
        const topMainData = useSelector((state) => state.MainBlog.mainBlog);
        const topSubData = useSelector((state) => state.SubBlogs.subBlog);

        const userInfo = useSelector((state) => state.userLogin.userInfo);

    return (
        <div className="todaysHeading center-row">
            <div className="leftBx">
                <Link to={!userInfo ? `/login` : `/blog/${topMainData._id}`}>
                <div className="todaysHeading-mainHeading">
                    <div className="media__img">
                        <img src={topMainData.image} alt={topMainData.title} />
                    </div>
                    <div className="media__content center-row-left">
                        <div>
                            <span className='media__content-title'>{topMainData.title}</span>
                            <p className='media__content-summary'>{topMainData.description}</p>
                            <Link to={!userInfo ? `/login` : `/${topMainData.type}`}><span className="media__content-tag">{topMainData.type}</span></Link>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="rightBx">
                {
                    topSubData.map((e,i) => {
                        return (
                            <>
                            <Link to={!userInfo ? `/login` : `/blog/${e._id}`}>
                                <div className="todaysHeading-subHeading">
                                    <div className="media__img">
                                        <img src={e.image} alt={e.title} />
                                    </div>
                                    <div className="media__content center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            <Link to={!userInfo ? `/login` : `/${e.type}`}><span className="media__content-tag">{e.type}</span></Link>
                                        </div>
                                    </div>
                                     </div>
                             </Link>
                            </> 
                        )
                    })
                }
            </div>
        </div>
  )
}

export default MainPage__topHeadings

