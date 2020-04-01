import {
    LOGIN, AUTH_USER, PASSWORD, LOGOUT
} from './actionTypes';

const { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } = LOGIN;
const {
    GET_AUTH_USER, GET_AUTH_USER_ERROR, GET_AUTH_USER_SUCCESS, SET_AUTH_STATE,
} = AUTH_USER;
const {
    FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS,
} = PASSWORD;
const { LOGOUT_USER, LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS } = LOGOUT;

const INITIAL_STATE = {
    error: false,
    forgotPassword: null,
    isAuthenticated: null,
    loading: false,
    logout: null,
    resetPassword: null,
    token: localStorage.getItem('token'),
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case LOGIN_USER:
        return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
        return {
            ...state, error: false, isAuthenticated: true, loading: false, token: action.payload,
        };
    case LOGIN_USER_ERROR:
        return {
            ...state, error: action.payload, isAuthenticated: false, loading: false, token: null,
        };
    case GET_AUTH_USER:
        return { ...state, loading: true };
    case GET_AUTH_USER_SUCCESS:
        return {
            ...state, isAuthenticated: true, loading: false, user: action.payload,
        };
    case GET_AUTH_USER_ERROR:
        return {
            ...state, error: action.payload, isAuthenticated: false, loading: false,
        };
    case SET_AUTH_STATE:
        return { ...state, isAuthenticated: action.payload };
    case FORGOT_PASSWORD:
        return { ...state, loading: true };
    case FORGOT_PASSWORD_SUCCESS:
        return { ...state, forgotPassword: action.payload, loading: false };
    case FORGOT_PASSWORD_ERROR:
        return {
            ...state, error: action.payload, loading: false,
        };
    case RESET_PASSWORD:
        return { ...state, loading: true };
    case RESET_PASSWORD_SUCCESS:
        return { ...state, loading: false, resetPassword: action.payload };
    case RESET_PASSWORD_ERROR:
        return {
            ...state, error: action.payload, loading: false,
        };
    case LOGOUT_USER:
        return { ...state, loading: true };
    case LOGOUT_USER_SUCCESS:
        return {
            ...state, isAuthenticated: false, loading: false, logout: action.payload, token: null, user: null,
        };
    case LOGOUT_USER_ERROR:
        return {
            ...state, error: action.payload, loading: false,
        };
    default:
        return state;
    }
};
