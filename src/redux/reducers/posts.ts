import {
  ADD_POST,
  GET_POSTS,
  UPDATE_POST,
  REMOVE_POST
} from '../actionTypes';
import { IS_DEBUGGING } from '../../config';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      if (IS_DEBUGGING) console.log('new post', action.post);
      return [action.post, ...state];
    case GET_POSTS:
      if (IS_DEBUGGING) console.log('posts', action.posts);
      return action.posts;
    case UPDATE_POST:
      if (IS_DEBUGGING) console.log('update post', action.post);
      return state.map(item => {
        if (item.postId === action.post.postId) {
          return action.post;
        }
        return item;
      });
    case REMOVE_POST:
      if (IS_DEBUGGING) console.log('remove post', action.postId);
      return state.filter(item => item.postId !== action.postId);
    default:
      return state;
  }
};
