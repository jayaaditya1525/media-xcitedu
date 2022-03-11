import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainPage__contentSection from '../../Components/MainPage__contentSection/MainPage__contentSection'
import Navbar from '../../Components/Navbar/Navbar'
import TopBlogs from '../../Components/TopBlogs/TopBlogs'
import './Home.css'
import {
  setAllBlogs,
  setTopMainBlog,
  setTopSubBlog,
  setNewsBlog,
  setBusinessBlog,
  setSociologyBlog,
  setTechBlog,
  setEconomicBlog,
  setOtherBlog,
} from '../../redux/action/Action'
import PerLoader from '../../Components/PerLoader/PerLoader';
const Home = () => {
  const [loaderHide,setLoaderHide] = useState(false);
    // Dispatch Data to Store
    const dispatch = useDispatch()

    // send maintopdata 
    const topMainData = (response) => {
        let allBlogLenth = response.data.data.length;
        let lastData = response.data.data[allBlogLenth-1];
        dispatch(setTopMainBlog(lastData))
    }

    // send mainsubdata
    const topSubData = (response) => {
        let allBlogLenth = response.data.data.length;
        const data = []
        for (let i = 2; i < 6; i++) {
            data.push(response.data.data[allBlogLenth - i]);
        }
        dispatch(setTopSubBlog(data))
    }

    // send newsBlog 
    const filterBlog = (response,type,dispatchName) => {
        let allBlogLenth = response.length;
        const data = [];
        for (let i = 0; i < allBlogLenth ; i++) {
            data.push(response[allBlogLenth - i-1]);
        }
        const filterData = [];
        data.map((e) => {
            if(e.type === type){
                filterData.push(e)
            }
        })
        const sendData =[];
        for (let i = 0; i < 4; i++) {
            sendData.push(filterData[i]);
        }
        dispatch(dispatchName(sendData))

    }

    // Top Data
    const data = []
    const tMainData = useSelector((state) => state.MainBlog.mainBlog);
    const tSubData = useSelector((state) => state.SubBlogs.subBlog);
    const setData = () => {
      data.push(tMainData);
      tSubData.map((e) => {
      data.push(e);
      })

    }

    // Storing Data in Store
    const fetchAllBlogs = async () => {
        try {
            const response = await axios("https://mediabackend-xcitedu.herokuapp.com/blog/allBlogs");
            setLoaderHide(true)
            // console.log(response.data.data);
            dispatch(setAllBlogs(response.data.data))
            // calling topmaindata
            topMainData(response)
            // calling topsubdata
            topSubData(response)
            const data = response.data.data;
            // calling newsblog
            filterBlog(data,"News",setNewsBlog);
            // calling businessBlog
            filterBlog(data,"Business",setBusinessBlog);
            // calling sociologyBlog
            filterBlog(data,"Sociology",setSociologyBlog);
            // calling techBlog
            filterBlog(data,"Tech",setTechBlog);
            // calling techBlog
            filterBlog(data,"Economic",setEconomicBlog);
            // calling othersBlog
            filterBlog(data,"Other",setOtherBlog);
        } catch (error) {
            console.log(`Something Went Wrong : ${error}`);
        }
    }

    // UseEffect
    useEffect(() => {
        setLoaderHide(false)
        fetchAllBlogs();
      }, [])
      
      setData();
    





    

  
 

     // Get New Blog
     const NewBlogs = useSelector((state) => state.NewsBlogs.newsBlog);
     const BusinessBlogs = useSelector((state) => state.BusinessBlogs.businessBlog);
     const SociologyBlogs = useSelector((state) => state.SociologyBlogs.sociologyBlog);
     const TechBlogs = useSelector((state) => state.TechBlogs.techBlog);
     const EconomicBlogs = useSelector((state) => state.EconomicBlogs.economicBlog);
     const OtherBlogs = useSelector((state) => state.OtherBlogs.otherBlog);

     

  return (
    <>
    <div className="Home-container">
        <PerLoader hide={loaderHide}/>
        <Navbar pageName={'Home'} />
        <TopBlogs blogset={data}/>
        <MainPage__contentSection sectionName="News" data={NewBlogs} />
        <MainPage__contentSection sectionName="Business" data={BusinessBlogs} />
        <MainPage__contentSection sectionName="Sociology" data={SociologyBlogs} />
        <MainPage__contentSection sectionName="Tech" data={TechBlogs} />
        <MainPage__contentSection sectionName="Economic" data={EconomicBlogs} />
        <MainPage__contentSection sectionName="Others" data={OtherBlogs} />
    </div>
    </>
  )
}

export default Home