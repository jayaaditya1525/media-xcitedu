import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CurrentJounBlog.css'

const CurrentJounBlog = ({blogs}) => {
    const [showLength,setShowLength] = useState(12);
  return (
    <>
        {
            blogs.map((e,i) => {
               if(i < showLength){
                return (
                    <>
                        <div className="hr"></div>
                        <div className="CurrentJounBlog__container">
                            <a href={`/blog/${e._id}`}><span className="media-title">{e.title}</span></a>
                            <span className="media-description">{e.description}</span>
                            <div className="media-imgBx">
                                <img src={e.image} alt="" />
                            </div>
                        </div>
                    </>
                )
               }
            })
        }
        <div className="loadMoreContainer center-row">
              {blogs.length > 12 ? <button onClick={() => {setShowLength(showLength + 12)}}>Load More</button> : null }
          </div>
    </>
  )
}

export default CurrentJounBlog