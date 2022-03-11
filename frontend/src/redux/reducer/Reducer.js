import { ActionType } from "../constant/Action-Type";


export const allBlogsReducer = (state = {allBlogs : []}, {type,playload}) =>{
    switch (type) {
        case ActionType.SET_ALL_BLOGS:
            return {...state,allBlogs : playload}
            

        default:
            return state
    }
}

export const topMainBlogReducer = (state = {mainBlog : {}},{type,playload}) => {
    switch (type) {
        case ActionType.SET_TOP_MAIN_BLOG:
            return {mainBlog : playload}

        default:
            return state
    }
}

export const topSubBlogReducer = (state = {subBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_TOP_SUB_BLOGS:
            return {...state,subBlog : playload}

        default:
            return state
    }
}

export const NewsBlogsReducer = (state = {newsBlog : [], allNewsBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_NEWS_BLOGS:
            return {...state,newsBlog : playload}
        
        case ActionType.SET_ALL_NEWS_BLOGS:
            return {...state,allNewsBlog : playload}

        default:
            return state
    }
}

export const BusinessBlogsReducer = (state = {businessBlog : [], allBusinessBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_BUISNESS_BLOGS:
            return {...state,businessBlog : playload}

        case ActionType.SET_ALL_BUISNESS_BLOGS:
            return {...state,allBusinessBlog : playload}

        default:
            return state
    }
}

export const SociologyBlogsReducer = (state = {sociologyBlog : [], allSociologyBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_SOCIOLOGY_BLOGS:
            return {...state,sociologyBlog : playload}

         case ActionType.SET_ALL_SOCIOLOGY_BLOGS:
            return {...state,allSociologyBlog : playload}        

        default:
            return state
    }
}

export const TechBlogsReducer = (state = {techBlog : [], allTechBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_TECH_BLOGS:
            return {...state,techBlog : playload}

        case ActionType.SET_ALL_TECH_BLOGS:
            return {...state,allTechBlog : playload}    

        default:
            return state
    }
}

export const EconomicBlogsReducer = (state = {economicBlog : [], allEconomicBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_ECONOMICS_BLOGS:
            return {...state,economicBlog : playload}
            
        case ActionType.SET_ALL_ECONOMICS_BLOGS:
            return {...state,allEconomicBlog : playload}

        default:
            return state
    }
}

export const OtherBlogsReducer = (state = {otherBlog : [],allOtherBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_ALL_OTHER_BLOGS:
            return {...state,otherBlog : playload}

        case ActionType.SET_ALL_OTHER_BLOGS:
            return {...state,allOtherBlog : playload}

        default:
            return state
    }
}

export const singleBlogReducer = (state = {singleBlog : {}},{type,playload}) => {
    switch (type) {
        case ActionType.SET_SINGLE_BLOG:
            return {singleBlog : playload}

        default:
            return state
    }
}

export const latestBlogReducer = (state = {latestBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_LATEST_BLOGS:
            return {...state,latestBlog : playload}

        default:
            return state
    }
}

export const checkLikedBlogReducer = (state = {isLiked : false},{type,playload}) => {
    switch(type) {
        case ActionType.SET_IS_LIKED : 
            return {isLiked : playload}
        
        default :
            return state
    }
}