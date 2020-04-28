import { POST, POSTS } from './actionTypes';

const { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } = POSTS;
const {
    GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, REMOVE_POST,
} = POST;

const INITIAL_STATE = {
    error: false,
    loading: false,
    post: null,
    posts: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case GET_POSTS:
        return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
        return {
            ...state, error: false, loading: false, posts: action.payload,
        };
    case GET_POSTS_ERROR:
        return {
            ...state, error: action.payload, loading: false, posts: null,
        };
    case GET_POST:
        return { ...state, loading: true };
    case GET_POST_SUCCESS:
        return {
            ...state, error: false, loading: false, post: action.payload,
        };
    case GET_POST_ERROR:
        return {
            ...state, error: action.payload, loading: false, post: null,
        };
    case REMOVE_POST:
        return {
            ...state, post: null,
        };
    default:
        return state;
    }
};
