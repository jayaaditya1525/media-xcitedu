import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import MainPage__topHeadings from '../../Components/MainPage__topHeadings/MainPage__topHeadings'
import Navbar from '../../Components/Navbar/Navbar'
import MainPage__contentSection from '../../Components/MainPage__contentSection/MainPage__contentSection.js'
import './MainPage.css'
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

const MainPage = () => {
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
            //calling otherBlog
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

    // Get Current Date &
    let todayDay;
    let todayDate;
    let todayMonth;
   const TimeDate = (today) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
    todayDay = days[today.getDay()];
    todayDate = today.getDate();
    todayMonth = months[today.getMonth()];
   }

   var today=new Date();  
   TimeDate(today);

   // Get New Blog
   const NewBlogs = useSelector((state) => state.NewsBlogs.newsBlog);
   const BusinessBlogs = useSelector((state) => state.BusinessBlogs.businessBlog);
   const SociologyBlogs = useSelector((state) => state.SociologyBlogs.sociologyBlog);
   const TechBlogs = useSelector((state) => state.TechBlogs.techBlog);
   const EconomicBlogs = useSelector((state) => state.EconomicBlogs.economicBlog);
   const OtherBlogs = useSelector((state) => state);

   console.log(OtherBlogs);

  return (
    <div className="mainPage-container">
        <PerLoader hide={loaderHide}/>
        <Navbar pageName={"MainPage"} />
        <div className="mainPage-container__heading-container center-row-left-right">
            <div>
                <span className='greeting'>Welcome to MediaHouse.com</span>
            </div>
            <div>
                <span className='time_date'>{`${todayDay}, ${todayDate} ${todayMonth}`}</span>
            </div>
        </div>
        <MainPage__topHeadings  />
        <MainPage__contentSection sectionName="News" data={NewBlogs} />
        <MainPage__contentSection sectionName="Business" data={BusinessBlogs} />
        <MainPage__contentSection sectionName="Sociology" data={SociologyBlogs} />
        <MainPage__contentSection sectionName="Tech" data={TechBlogs} />
        <MainPage__contentSection sectionName="Economic" data={EconomicBlogs} />
        <MainPage__contentSection sectionName="Others" data={EconomicBlogs} />
    </div>
  )
}

export default MainPage