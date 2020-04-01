import { PROFILE } from './actionTypes';

const { CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS } = PROFILE;

const INITIAL_STATE = {
    error: false,
    loading: false,
    profile: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CREATE_PROFILE:
        return { ...state, loading: true };
    case CREATE_PROFILE_SUCCESS:
        return {
            ...state, error: false, loading: false, profile: action.payload,
        };
    case CREATE_PROFILE_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
        return state;
    }
};
