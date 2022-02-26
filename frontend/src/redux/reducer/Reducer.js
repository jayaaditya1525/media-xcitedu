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

export const NewsBlogsReducer = (state = {newsBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_NEWS_BLOGS:
            return {...state,newsBlog : playload}

        default:
            return state
    }
}

export const BusinessBlogsReducer = (state = {businessBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_BUISNESS_BLOGS:
            return {...state,businessBlog : playload}

        default:
            return state
    }
}

export const SociologyBlogsReducer = (state = {sociologyBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_SOCIOLOGY_BLOGS:
            return {...state,sociologyBlog : playload}

        default:
            return state
    }
}

export const TechBlogsReducer = (state = {techBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_TECH_BLOGS:
            return {...state,techBlog : playload}

        default:
            return state
    }
}

export const EconomicBlogsReducer = (state = {economicBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_ECONOMICS_BLOGS:
            return {...state,economicBlog : playload}

        default:
            return state
    }
}

export const OtherBlogsReducer = (state = {otherBlog : []},{type,playload}) => {
    switch (type) {
        case ActionType.SET_ECONOMICS_BLOGS:
            return {...state,otherBlog : playload}

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