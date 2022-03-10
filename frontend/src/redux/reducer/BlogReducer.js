import { Blog_ActionType } from "../constant/Blog_Action-Type";

export const CreateBlogReducer = (state = { createBlog: {} }, action) => {
  switch (action.type) {
    case Blog_ActionType.SET_CREATE_BLOGS:
      return { createBlog: action.playload };

    default:
      return state;
  }
};
