import { GET_USERS, GET_POSTS, GET_COMMENTS } from "../actions/actionsTypes";

var initialState = { users: [], posts: [], comments: [] };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default Reducer;
