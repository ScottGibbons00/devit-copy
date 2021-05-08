import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, current: state.current };
    case ActionTypes.FETCH_POST:
      return { all: state.all, current: action.payload };
    case ActionTypes.NEW_POST:
      return { all: [...state.all, action.payload], current: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
