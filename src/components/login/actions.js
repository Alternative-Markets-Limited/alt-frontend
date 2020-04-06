import {
    LOGIN, AUTH_USER, PASSWORD, LOGOUT
} from './actionTypes';

const { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } = LOGIN;
const {
    GET_AUTH_USER, GET_AUTH_USER_ERROR, GET_AUTH_USER_SUCCESS, SET_AUTH_STATE,
} = AUTH_USER;
const {
    FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS,
} = PASSWORD;
const { LOGOUT_USER, LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS } = LOGOUT;

export const loginUser = values => ({
    payload: values,
    type: LOGIN_USER,
});

export const loginUserSuccess = data => ({
    payload: data,
    type: LOGIN_USER_SUCCESS,
});

export const loginUserError = error => ({
    payload: error,
    type: LOGIN_USER_ERROR,
});

export const getAuthUser = token => ({
    payload: token,
    type: GET_AUTH_USER,
});

export const getAuthUserSuccess = user => ({
    payload: user,
    type: GET_AUTH_USER_SUCCESS,
});

export const getAuthUserError = error => ({
    payload: error,
    type: GET_AUTH_USER_ERROR,
});

export const authState = value => ({
    payload: value,
    type: SET_AUTH_STATE,
});

export const forgotPassword = email => ({
    payload: email,
    type: FORGOT_PASSWORD,
});

export const forgotPasswordSuccess = data => ({
    payload: data,
    type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordError = error => ({
    payload: error,
    type: FORGOT_PASSWORD_ERROR,
});

export const resetPassword = data => ({
    payload: data,
    type: RESET_PASSWORD,
});

export const resetPasswordSuccess = data => ({
    payload: data,
    type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordError = error => ({
    payload: error,
    type: RESET_PASSWORD_ERROR,
});

export const logoutUser = token => ({
    payload: token,
    type: LOGOUT_USER,
});

export const logoutUserSuccess = data => ({
    payload: data,
    type: LOGOUT_USER_SUCCESS,
});

export const logoutUserError = error => ({
    payload: error,
    type: LOGOUT_USER_ERROR,
});
