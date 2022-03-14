import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import CurrentJounBlog from '../../Components/CurrentJounBlog/CurrentJounBlog';
import Navbar from '../../Components/Navbar/Navbar'
import PerLoader from '../../Components/PerLoader/PerLoader';
import { setAllBlogs, setIsLiked, setLatestBlog, setSingleBlog , setCurrentJounBlog } from '../../redux/action/Action';
import './SingleBlog.css'

const SingleBlog = () => {
    // like handler
    const [likeBlog,setLikeBlog] = useState(false);
    //loder
    const [loaderHide,setLoaderHide] = useState(false);
    // Hide & Show Share Option
    const[showShare,setShowShare] = useState(false);
    // set User
    const [user,setUser] = useState("");
    // comment 
    // const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const {id} = useParams();
    const userInfo = useSelector((state) => state.userLogin.userInfo);
    const userId  = userInfo?.data?._id;
    const checkBlogLike = useSelector((state) => state.isBlogLiked.isLiked);

    //get blog
    const blog = useSelector((state) => state.SingleBlog.singleBlog);
    //get latest blog
    const latestBlog = useSelector((state) => state.LatestBlog.latestBlog);
    
    // console.log(blog);
    const findSingleUser = async(id)  => {
        const token = localStorage?.getItem('token');
        const body = JSON.stringify({
            "userId" : id
        })
        await axios({
            method : "POST",
            url : "http://localhost:8080/user/findSingleUser",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            data : body
        }).then((res) => {
            setUser(res?.data?.user?.name);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    // find current Joun Blog
    const currentJounBlog = async(JounId,blogId) => {
        const token = localStorage.getItem('token');
        const body = JSON.stringify({
            "jounId" : JounId
        })
        await axios({
            method : "POST",
            url : "http://localhost:8080/blog/jounBlog",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            data : body
        }).then((res) => {
            let data = res.data.blog
            let arr = [];

            for (let i = 0; i < data.length; i++) {
                if(data[data.length - (i + 1)]._id !== blog){
                    arr.push(data[data.length - (i + 1)])
                }
            }

            dispatch(setCurrentJounBlog(arr))


        }).catch((err) => {
            console.log(err);
        })
    }


    //get blog
    const jounCunBlog = useSelector((state) => state.GetCurrentJounBlogReducer.currentJunBlog);
    
    // filter single blog
    const filterSingleBlog = (response) => {
        response.map((e,i) => {
            if(e._id === id){
                dispatch(setSingleBlog(e));
                findSingleUser(e.userId);
                currentJounBlog(e.userId,e._id)
                const data = e.likes;
                
                data.map((b) => {
                    if(b === userId){
                        dispatch(setIsLiked(true))
                        setLikeBlog(true)
                    }else{
                        dispatch(setIsLiked(false))
                        setLikeBlog(false)
                    }
                })
            }
        })
    }

    
    // filter latest blog
    const filterLastestBlog = (response) => {
        let arr = []
        // reversing arr for getting latest data
        for (let i = 0; i < response.length; i++) {
            arr.push(response[response.length - (i+1)]);
        }

        // filtering data
        dispatch(setLatestBlog(arr));
    }

       

    // 
    const getData = async () =>{
       try {
            const response = await axios("https://mediabackend-xcitedu.herokuapp.com/blog/allBlogs");
            setLoaderHide(true)
            let data = response.data.data;
            // filter single blog
            filterSingleBlog(data);
            // filter latest blog
            filterLastestBlog(data);
       } catch (error) {
           console.log('something went wrong',error);
       }
    }

    

    // 
    useEffect(() => {
        setLoaderHide(false);
        getData();
    },[])
    

    //like handler 
    const likeHandler = async() => {
        setLikeBlog(!likeBlog);
        const body = JSON.stringify({
            "userId" : userInfo.data._id,
            "blogId" : id
        })

        const token = localStorage.getItem('token');

        if(likeBlog === false){
            await axios({
                method : "PUT",
                url : "http://localhost:8080/blog/likeBlog",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                data : body,
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(`something went wrong : ${err}`);
            })
        }else{
            await axios({
                method : "PUT",
                url : "http://localhost:8080/blog/removeLikeBlog",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                data : body,
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(`something went wrong : ${err}`);
            })
        }
    }

    const totalLike = blog.likes;
  return (
    <>
        <PerLoader hide={loaderHide}/>
        <Navbar pageName={blog.type}/>
        <>
          <div className="singleBlog-container">
              <div className="singleBlog-container__backgroundContainer">
                    <div className="singleBlog-container__backgroundContainer-bgImbx">
                        <img src={blog.image} alt="" />
                    </div>
                    <div className="singleBlog-container__backgroundContainer-contentContainer">
                        <div>
                            <h1 className="media-title">
                                {blog.title}
                            </h1>
                            <span className='mediaBlog-Creator'>
                            By {user}
                            </span>
                            <span className='mediaBlog-createdAt'>
                            <ion-icon name="time-outline"></ion-icon> 13 hours ago
                            </span>
                        </div>
                    </div>
              </div>
              <div className="singleBlog-container__contentContainer">
                  <div className="singleBlog-container__contentContainer-contentBx">
                      <div>
                          <h3 className='media-description'>{blog.description}</h3>
                          <span className="media-body">{blog.body}</span>
                          <div className="extra-section">
                              <div>
                                <span onClick={likeHandler}>{likeBlog === true ? <ion-icon name="heart" style={{color : "red"}}></ion-icon> : <ion-icon name="heart-outline"></ion-icon>} {}</span>
                                <span><ion-icon name="bookmark-outline"></ion-icon></span>
                              </div>
                              <div>
                                  <a><ion-icon name="logo-facebook"></ion-icon></a>
                                  <a><ion-icon name="logo-instagram"></ion-icon></a>
                                  <a><ion-icon name="ellipsis-vertical" onClick={() => {setShowShare(!showShare)}}></ion-icon> <span className='center-row' id={showShare == true ? "show" : "hide"}><div className='center-row'>Share</div></span></a>
                              </div>
                          </div>
                          <span className="media-total-like">
                                Total Like {totalLike !== undefined ? totalLike.length : "0"}
                          </span>
                          <CurrentJounBlog blogs={jounCunBlog}/>
                      </div>
                  </div>
              <div className="singleBlog-container__contentContainer-relatedNews">
                    <span className="bxTitle">
                        Latest News
                    </span>
                    <div className="relatedNews_container">
                        {
                            React.Children.toArray(latestBlog.map((e) => {
                                    return (
                                        <a href={`/blog/${e._id}`} >
                                            <div className="relatedNews_container-card">
                                            <div className="relatedNews_container-card__imgBx">
                                                <img src={e.image} alt={e.title} />
                                            </div>
                                            <div className="relatedNews_container-card__contentBx">
                                                <h4 className='card_title'>{e.title}</h4>
                                            </div>
                                        </div>
                                        </a>
                                    )
                            }))
                        }
                    </div>
              </div>
              </div>
          </div>
        </>
    </>
  )
}

export default SingleBlog