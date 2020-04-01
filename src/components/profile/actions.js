import { PROFILE } from './actionTypes';

const { CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS } = PROFILE;

export const createProfile = data => ({
    payload: data,
    type: CREATE_PROFILE,
});

export const createProfileSuccess = data => ({
    payload: data,
    type: CREATE_PROFILE_SUCCESS,
});

export const createProfileError = error => ({
    payload: error,
    type: CREATE_PROFILE_ERROR,
});
