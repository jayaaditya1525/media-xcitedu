import { ActionType } from "../constant/Action-Type"

export const setAllBlogs = (blogs) => {
    return {
        type: ActionType.SET_ALL_BLOGS,
        playload: blogs
    }
}

export const setTopMainBlog = (blog) => {
    return {
        type: ActionType.SET_TOP_MAIN_BLOG,
        playload: blog
    }
}

export const setTopSubBlog = (blogs) => {
    return {
        type: ActionType.SET_TOP_SUB_BLOGS,
        playload: blogs
    }
}

export const setNewsBlog = (blogs) => {
    return {
        type: ActionType.SET_NEWS_BLOGS,
        playload: blogs
    }
}


export const setBusinessBlog = (blogs) => {
    return {
        type: ActionType.SET_BUISNESS_BLOGS,
        playload: blogs
    }
}

export const setSociologyBlog = (blogs) => {
    return {
        type: ActionType.SET_SOCIOLOGY_BLOGS,
        playload: blogs
    }
}

export const setTechBlog = (blogs) => {
    return {
        type: ActionType.SET_TECH_BLOGS,
        playload: blogs
    }
}

export const setEconomicBlog = (blogs) => {
    return {
        type: ActionType.SET_ECONOMICS_BLOGS,
        playload: blogs
    }
}

export const setOtherBlog = (blogs) => {
    return {
        type: ActionType.SET_OTHER_BLOGS,
        playload: blogs
    }
}
export const setAllNewsBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_NEWS_BLOGS,
        playload: blogs
    }
}


export const setAllBusinessBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_BUISNESS_BLOGS,
        playload: blogs
    }
}

export const setAllSociologyBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_SOCIOLOGY_BLOGS,
        playload: blogs
    }
}

export const setAllTechBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_TECH_BLOGS,
        playload: blogs
    }
}

export const setAllEconomicBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_ECONOMICS_BLOGS,
        playload: blogs
    }
}

export const setAllOtherBlog = (blogs) => {
    return {
        type: ActionType.SET_ALL_OTHER_BLOGS,
        playload: blogs
    }
}

export const setSingleBlog = (blog) => {
    return {
        type: ActionType.SET_SINGLE_BLOG,
        playload: blog
    }
}

export const setLatestBlog = (blogs) => {
    return {
        type: ActionType.SET_LATEST_BLOGS,
        playload: blogs
    }
}


export const setIsLiked = (liked) => {
    return{
        type : ActionType.SET_IS_LIKED,
        playload : liked
    }
}