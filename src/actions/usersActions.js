import { GET_USERS, GET_POSTS, GET_COMMENTS } from "./actionsTypes";
import axios from "axios";

//https://jsonplaceholder.typicode.com/comments
//https://jsonplaceholder.typicode.com/posts

export const getAllUsers = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: GET_USERS,
        payload: data
      })
    );
};

export const getAllPosts = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: GET_POSTS,
        payload: data
      })
    );
};

export const getAllComments = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: GET_COMMENTS,
        payload: data
      })
    );
};
