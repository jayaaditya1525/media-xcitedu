import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AllBlogs.css'
const AllBlogs = ({blogset}) => {
    const [show, setShow] = useState(12);
    
  return (
    <>
      <div className="allBogsContainer">
          <div className="allBogsContainer_lable">
              <span>All Blogs</span>
          </div>
          <div className="allBogsContainer_blogContainer">
            {
                blogset.map((e,i) => {
                    if(i < show){
                        return(
                            <>
                                <div className="newsBlock">
                                <a href={`/blog/${e._id}`}>
                                    <div className="media__img">
                                        <img src={e.image} alt={e._id} />
                                    </div>
                                    <div className="media__content center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            <p className='media__content-summary'>{e.description}</p>
                                            <Link to={`/blog/${e.type}`}><span className="media__content-tag">{e.tags.length > 0 ? e.tags[0] : e.type}</span></Link>
                                        </div>
                                    </div>
                                </a >
                                </div>
                            </>
                        )
                    }
                })
            }
          </div>
          <div className="loadMoreContainer center-row">
              {blogset.length > 12 ? <button onClick={() => {setShow(show + 12)}}>Load More</button> : null }
          </div>
      </div>  
    </>
  )
}

export default AllBlogs