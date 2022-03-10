import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllBlogs from '../../Components/AllBlogs/AllBlogs';
import Navbar from '../../Components/Navbar/Navbar'
import PerLoader from '../../Components/PerLoader/PerLoader';
import TopBlogs from '../../Components/TopBlogs/TopBlogs';
import { setAllOtherBlog } from '../../redux/action/Action';

const OtherBlogPage = () => {
  const distpatch = useDispatch();
  const [loaderHide,setLoaderHide] = useState(false);

    const makeLatest = (blog) => {
      const latestBlog = [];
      for (let i = 0; i < blog.length; i++) {
        latestBlog.push(blog[blog.length - (i+1)]);
      }

      distpatch(setAllOtherBlog(latestBlog));
    }

    const getAllData = async() => {
      await axios.get("http://localhost:8080/blog/allOtherBlogs").then((res) => {
        makeLatest(res.data)
        setLoaderHide(true)
      }).catch((error) => {
        console.log(`Something Went Wrong : ${error}`);
      })
    }

    useEffect(() => {
      getAllData();
    },[])

    const setOtherBlog = useSelector((state) => state.OtherBlogs.allOtherBlog);

  return (
    <>
        <PerLoader hide={loaderHide}/>
        <Navbar pageName={"Others"} />
        <TopBlogs blogset={setOtherBlog} />
        <AllBlogs blogset={setOtherBlog} />
    </>
  )
}

export default OtherBlogPage