import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './TopBlogs.css'
const TopBlogs = ({blogset}) => {
    const userInfo = useSelector((state) => state.userLogin.userInfo);
  return (
    <>
    <div className="topBlogs__container center-row">
        <div className="topBlogs__container-leftBx center-column">
            {
                blogset.map((e,i) => {
                    if(i<2){
                        return (
                            <>
                                <div className="topBlogs__container-leftBx__bx">
                                <Link to={!userInfo ? `/login` : `/blog/${e._id}`}>
                                    <div className="contentBx center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            <Link to={!userInfo ? `/login` : `/${e.tags[0]}`}><span className="media__content-tag">{e.tags[0]}</span></Link>
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
                })
            }
        </div>
        <div className="topBlogs__container-middleBx">
        {
                blogset.map((e,i) => {
                    if(i===2){
                        return (
                        <>
                            <div className="topBlogs__container-middleBx-bx">
                            <Link to={!userInfo ? `/login` : `/blog/${e._id}`}>
                            <div className="contentBx center-row-left">
                                        <div>
                                            <span className='media__content-title'>{e.title}</span>
                                            <p className='media__content-summary'>​​{e.description}</p>
                                            <Link to={!userInfo ? `/login` : `/${e.tags[0]}`}><span className="media__content-tag">{e.tags[0]}</span></Link>
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
                })
            }
        </div>
        <div className="topBlogs__container-rightBx center-column">
        {
                blogset.map((e,i) => {
                    if(i>2 && i<5){
                        return (
                            <>
                                <div className="topBlogs__container-rightBx-bx">
                                    <Link to={!userInfo ? `/login` : `/blog/${e._id}`}>
                                <div className="contentBx center-row-left">
                                    <div>
                                        <span className='media__content-title'>{e.title}</span>
                                        <Link to={!userInfo ? `/login` : `/${e.tags[0]}`}><span className="media__content-tag">{e.tags[0]}</span></Link>
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
                })
            }
        </div>
    </div>
    </>
  )
}

export default TopBlogs