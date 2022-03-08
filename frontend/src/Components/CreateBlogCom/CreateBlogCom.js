import React from 'react'
import { Link } from 'react-router-dom'
import './CreateBlogCom.css'
const CreateBlogCom = () => {
  return (
   <Link to={"/createblog"}>
     <div className="CBLink__container center-row">
        <ion-icon name="create-outline"></ion-icon>
     </div>
   </Link>
  )
}

export default CreateBlogCom