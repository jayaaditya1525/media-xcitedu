import React from 'react'
import { Link } from 'react-router-dom'
import './RelatedBlog.css'
const RelatedBlog = ({cardData}) => {
  return (
    <>
    {
        cardData.map((e,i) => {
            return (
                <Link to={`/blog/${e._id}`}>
                    <div className="relatedNews_container-card">
                        <div className="relatedNews_container-card__imgBx">
                            <img src={e.image} alt={e.title} />
                        </div>
                        <div className="relatedNews_container-card__contentBx">
                            <h4 className='card_title'>{e.title}</h4>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    </>
  )
}

export default RelatedBlog