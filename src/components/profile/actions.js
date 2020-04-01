import { PROFILE, BVN } from './actionTypes';

const { CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS } = PROFILE;
const { VERIFIY_BVN, VERIFIY_BVN_ERROR, VERIFIY_BVN_SUCCESS } = BVN;

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
