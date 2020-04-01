import { PROFILE, BVN } from './actionTypes';

const { CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS } = PROFILE;
const { VERIFIY_BVN, VERIFIY_BVN_ERROR, VERIFIY_BVN_SUCCESS } = BVN;

const INITIAL_STATE = {
    bvn: {
        error: false, formatted_dob: null, loading: false, success: false,
    },
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
    case VERIFIY_BVN:
        return { ...state, bvn: { loading: true } };
    case VERIFIY_BVN_SUCCESS:
        return { ...state, bvn: { formatted_dob: action.payload, loading: false, success: true } };
    case VERIFIY_BVN_ERROR:
        return {
            ...state,
            bvn: {
                error: action.payload, formatted_dob: null, loading: false, success: false,
            },
        };
    default:
        return state;
    }
};
