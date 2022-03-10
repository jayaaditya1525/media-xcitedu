import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllBlogs from '../../Components/AllBlogs/AllBlogs'
import Navbar from '../../Components/Navbar/Navbar'
import PerLoader from '../../Components/PerLoader/PerLoader'
import TopBlogs from '../../Components/TopBlogs/TopBlogs'
import { setAllNewsBlog } from '../../redux/action/Action'

const NewsBlogPage = () => {
  const [loaderHide,setLoaderHide] = useState(false);
    const distpatch = useDispatch();

    const makeLatest = (blog) => {
      const latestBlog = [];
      for (let i = 0; i < blog.length; i++) {
        latestBlog.push(blog[blog.length - (i+1)]);
      }

      distpatch(setAllNewsBlog(latestBlog));
    }

    const getAllData = async() => {
      await axios.get("http://localhost:8080/blog/allNewsBlogs").then((res) => {
        makeLatest(res.data)
        setLoaderHide(true)
      }).catch((error) => {
        console.log(`Something Went Wrong : ${error}`);
      })
    }

    useEffect(() => {
      getAllData();
    },[])

    const setOfNewBlog = useSelector((state) => state.NewsBlogs.allNewsBlog);

  return (
    <>
        <PerLoader hide={loaderHide}/>
        <Navbar pageName={"News"} />
        <TopBlogs blogset={setOfNewBlog}/>
        <AllBlogs blogset={setOfNewBlog}/>
    </>
  )
}

export default NewsBlogPage