import { REGISTER } from './actionTypes';

const { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } = REGISTER;

export const registerUser = user => ({
    payload: user,
    type: REGISTER_USER,
});

export const registerUserSuccess = user => ({
    payload: user,
    type: REGISTER_USER_SUCCESS,
});

export const registerUserError = error => ({
    payload: error,
    type: REGISTER_USER_ERROR,
});
