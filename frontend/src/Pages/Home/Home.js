import React from 'react'
import CreateBlogCom from '../../Components/CreateBlogCom/CreateBlogCom'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="Home-container">
        <Navbar pageName={'Home'} />
    </div>
    <CreateBlogCom />
    </>
  )
}

export default Home