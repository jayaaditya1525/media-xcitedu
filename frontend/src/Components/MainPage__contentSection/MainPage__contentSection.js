import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './MainPage__contentSection.css'

const MainPage__contentSection = ({sectionName,data}) => {
    const userInfo = useSelector((state) => state.userLogin.userInfo);
  return (
    <>
    <div className="MainPage__contentSection-container">
       <div className="media__content MainPage__contentSection-container__sectionName">
            <div>
                <Link to={!userInfo ? `/login` : `/${sectionName}`}><span className="media__content-tag">{sectionName}</span></Link>
            </div>
        </div>
        <div className="MainPage__contentSection-container__newsContainer">
            {
                data.map((e,i) => {
                    if(i < 4){
                        return(
                            <>
                             <Link to={!userInfo ? `/login` : `/blog/${e._id}`}>
                                 <div className="newsBlock">
                                     <div className="media__img">
                                         <img src={e.image} alt={e._id} />
                                     </div>
                                     <div className="media__content center-row-left">
                                         <div>
                                             <span className='media__content-title'>{e.title}</span>
                                             <p className='media__content-summary'>​​{e.description}</p>
                                             <Link to={!userInfo ? `/login` : `/${e.type}`}><span className="media__content-tag">{e.type}</span></Link>
                                         </div>
                                     </div>
                                 </div>
                             </Link>
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

export default MainPage__contentSection