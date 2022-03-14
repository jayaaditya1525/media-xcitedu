import React from 'react'
import { Link } from 'react-router-dom';
import './TopBlogs.css'
const TopBlogs = ({blogset}) => {
    
  return (
    <>
    <div className="topBlogs__container center-row">
        <div className="topBlogs__container-leftBx center-column">
            {
                React.Children.toArray(blogset.map((e,i) => {
                    if(i<2){
                        return (
                            <>
                                <div className="topBlogs__container-leftBx__bx">
                                <Link to={`/blog/${e._id}`}>
                                    <div className="contentBx center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            {/* <Link to={`/${e.type}`}><span className="media__content-tag">{e.tags[0]}</span></Link> */}
                                            <Link to={`/${e.type}`}><span className="media__content-tag">{e.type}</span></Link>
                                        </div>
                                    </div>
                                    <div className="imgBx">
                                        <img src={e.image} alt={e.title} />
                                    </div>
                                </Link>
                                </div>
                            </>
                            )
                    }
                }))
            }
        </div>
        <div className="topBlogs__container-middleBx">
        {
                React.Children.toArray(blogset.map((e,i) => {
                    if(i===2){
                        return (
                        <>
                            <div className="topBlogs__container-middleBx-bx">
                            <Link to={`/blog/${e._id}`}>
                            <div className="contentBx center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            <p className='media__content-summary'>​​{e.description}</p>
                                            {/* <Link to={`/${e.type}`}><span className="media__content-tag">{e.tags[0]}</span></Link> */}
                                            <Link to={`/${e.type}`}><span className="media__content-tag">{e.type}</span></Link>
                                        </div>
                                    </div>
                            <div className="imgBx">
                                <img src={e.image} alt={e.title} />
                            </div>
                            </Link >
                            </div>
                        </>
                        )
                    }
                }))
            }
        </div>
        <div className="topBlogs__container-rightBx center-column">
        {
                React.Children.toArray(blogset.map((e,i) => {
                    if(i>2 && i<5){
                        return (
                            <>
                                <div className="topBlogs__container-rightBx-bx">
                                    <Link to={`/blog/${e._id}`}>
                                <div className="contentBx center-row-left">
                                    <div>
                                        <span className='media__content-title'>{e.title}</span>
                                        {/* <Link to={`/${e.type}`}><span className="media__content-tag">{e.tags[0]}</span></Link> */}
                                        <Link to={`/${e.type}`}><span className="media__content-tag">{e.type}</span></Link>
                                    </div>
                                </div>
                                <div className="imgBx">
                                        <img src={e.image} alt={e.title} />
                                    </div>
                                    </Link>
                                </div>
                            </>
                        )
                    }
                }))
            }
        </div>
    </div>
    </>
  )
}

export default TopBlogs