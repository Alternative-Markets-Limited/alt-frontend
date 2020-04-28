import { POST, POSTS } from './actionTypes';

const {
    GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, REMOVE_POST,
} = POST;
const { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } = POSTS;

export const getPosts = () => ({
    type: GET_POSTS,
});

export const getPostsSuccess = data => ({
    payload: data,
    type: GET_POSTS_SUCCESS,
});

export const getPostsError = error => ({
    payload: error,
    type: GET_POSTS_ERROR,
});

export const getPost = slug => ({
    payload: slug,
    type: GET_POST,
});

export const getPostSuccess = data => ({
    payload: data,
    type: GET_POST_SUCCESS,
});

export const getPostError = error => ({
    payload: error,
    type: GET_POST_ERROR,
});

export const removePost = () => ({
    type: REMOVE_POST,
});
