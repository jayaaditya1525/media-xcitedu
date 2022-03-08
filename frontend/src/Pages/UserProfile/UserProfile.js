import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './UserProfile.css'
import {useSelector} from 'react-redux'

const UserProfile = () => {
    const user = useSelector((state) => state.userLogin)
    console.log(user);
    const {userInfo} = user
  return (
   <Navbar pageName={`Your Account`}/>
  )
}

export default UserProfile