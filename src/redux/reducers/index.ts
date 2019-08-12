import { postsReducer } from "./posts";

const rootReducer = (state: Object = {}, action: Function) => {
  // custom combineReducer function to pass different parts of the store around
  return { posts: postsReducer };
};

export default rootReducer;
