import { combineReducers } from 'redux'
import {
    allBlogsReducer,
    topMainBlogReducer,
    topSubBlogReducer,
    NewsBlogsReducer,
    BusinessBlogsReducer,
    SociologyBlogsReducer,
    TechBlogsReducer,
    EconomicBlogsReducer,
    singleBlogReducer,
    latestBlogReducer,
    OtherBlogsReducer,
    checkLikedBlogReducer
} from './Reducer'
import {
    userLoginReducer,
    userRegisterReducer
} from "./userReducers"

const reducer = combineReducers({
    Blogs: allBlogsReducer,
    MainBlog: topMainBlogReducer,
    SubBlogs: topSubBlogReducer,
    NewsBlogs: NewsBlogsReducer,
    BusinessBlogs: BusinessBlogsReducer,
    SociologyBlogs: SociologyBlogsReducer,
    TechBlogs: TechBlogsReducer,
    EconomicBlogs: EconomicBlogsReducer,
    OtherBlogs: OtherBlogsReducer,
    SingleBlog: singleBlogReducer,
    LatestBlog: latestBlogReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    isBlogLiked : checkLikedBlogReducer
})

export default reducer;