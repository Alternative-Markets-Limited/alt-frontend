import { PROFILE, BVN, BANKS } from './actionTypes';

const {
    CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_IMAGE_ERROR, UPDATE_PROFILE_IMAGE_SUCCESS,
} = PROFILE;
const { VERIFIY_BVN, VERIFIY_BVN_ERROR, VERIFIY_BVN_SUCCESS } = BVN;
const { GET_BANKS, GET_BANKS_ERROR, GET_BANKS_SUCCESS } = BANKS;

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

export const verifyBvn = bvn => ({
    payload: bvn,
    type: VERIFIY_BVN,
});

export const verifyBvnSuccess = data => ({
    payload: data,
    type: VERIFIY_BVN_SUCCESS,
});

export const verifyBvnError = error => ({
    payload: error,
    type: VERIFIY_BVN_ERROR,
});

export const updateProfile = data => ({
    payload: data,
    type: UPDATE_PROFILE,
});

export const updateProfileError = error => ({
    payload: error,
    type: UPDATE_PROFILE_ERROR,
});

export const updateProfileSuccess = data => ({
    payload: data,
    type: UPDATE_PROFILE_SUCCESS,
});

export const updateProfileImage = data => ({
    payload: data,
    type: UPDATE_PROFILE_IMAGE,
});

export const updateProfileImageSuccess = data => ({
    payload: data,
    type: UPDATE_PROFILE_IMAGE_SUCCESS,
});

export const updateProfileImageError = error => ({
    payload: error,
    type: UPDATE_PROFILE_IMAGE_ERROR,
});

export const getBanks = () => ({
    type: GET_BANKS,
});

export const getBanksSuccess = data => ({
    payload: data,
    type: GET_BANKS_SUCCESS,
});

export const getBanksError = error => ({
    payload: error,
    type: GET_BANKS_ERROR,
});

