import {combineReducers} from 'redux'
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
    latestBlogReducer
} from './Reducer'

const reducer = combineReducers({
    Blogs : allBlogsReducer,
    MainBlog : topMainBlogReducer,
    SubBlogs : topSubBlogReducer,
    NewsBlogs : NewsBlogsReducer,
    BusinessBlogs : BusinessBlogsReducer,
    SociologyBlogs : SociologyBlogsReducer,
    TechBlogs : TechBlogsReducer,
    EconomicBlogs : EconomicBlogsReducer,
    SingleBlog : singleBlogReducer,
    LatestBlog: latestBlogReducer
})

export default reducer;