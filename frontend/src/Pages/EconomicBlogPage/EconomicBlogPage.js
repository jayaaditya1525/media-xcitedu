import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllBlogs from '../../Components/AllBlogs/AllBlogs';
import Navbar from '../../Components/Navbar/Navbar'
import PerLoader from '../../Components/PerLoader/PerLoader';
import TopBlogs from '../../Components/TopBlogs/TopBlogs';
import { setAllEconomicBlog } from '../../redux/action/Action';

const EconomicBlogPage = () => {
  const distpatch = useDispatch();
  const [loaderHide,setLoaderHide] = useState(false);

    const makeLatest = (blog) => {
      const latestBlog = [];
      for (let i = 0; i < blog.length; i++) {
        latestBlog.push(blog[blog.length - (i+1)]);
      }

      distpatch(setAllEconomicBlog(latestBlog));
    }

    const getAllData = async() => {
      await axios.get("http://localhost:8080/blog/allTechBlogs").then((res) => {
        makeLatest(res.data)
        setLoaderHide(true)
      }).catch((error) => {
        console.log(`Something Went Wrong : ${error}`);
      })
    }

    useEffect(() => {
      getAllData();
    },[])

    const setOfEconomicBlog = useSelector((state) => state.EconomicBlogs.allEconomicBlog);

  return (
    <>

        <PerLoader hide={loaderHide}/>
        <Navbar pageName={"Economic"} />
        <TopBlogs blogset={setOfEconomicBlog} />
        <AllBlogs blogset={setOfEconomicBlog} />
    </>
  )
}

export default EconomicBlogPage