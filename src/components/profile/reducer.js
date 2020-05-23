import { PROFILE, BVN, BANKS } from './actionTypes';

const {
    CREATE_PROFILE, CREATE_PROFILE_ERROR, CREATE_PROFILE_SUCCESS, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_IMAGE_SUCCESS, UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_IMAGE_ERROR,
} = PROFILE;
const { VERIFIY_BVN, VERIFIY_BVN_ERROR, VERIFIY_BVN_SUCCESS } = BVN;
const { GET_BANKS, GET_BANKS_ERROR, GET_BANKS_SUCCESS } = BANKS;

const INITIAL_STATE = {
    banks: null,
    bvn: {
        error: false, loading: false, verified: null,
    },
    error: false,
    loading: false,
    profile: null,
    profileImage: { error: false, loading: false },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CREATE_PROFILE:
        return { ...state, error: false, loading: true };
    case CREATE_PROFILE_SUCCESS:
        return {
            ...state, error: false, loading: false, profile: action.payload,
        };
    case CREATE_PROFILE_ERROR:
        return { ...state, error: action.payload, loading: false };
    case VERIFIY_BVN:
        return { ...state, bvn: { loading: true } };
    case VERIFIY_BVN_SUCCESS:
        return {
            ...state,
            bvn: {
                error: false, loading: false, verified: true,
            },
        };
    case VERIFIY_BVN_ERROR:
        return {
            ...state,
            bvn: {
                error: true, loading: false, verified: false,
            },
        };
    case UPDATE_PROFILE:
        return { ...state, loading: true };
    case UPDATE_PROFILE_SUCCESS:
        return {
            ...state, error: false, loading: false, profile: action.payload,
        };
    case UPDATE_PROFILE_ERROR:
        return { ...state, error: action.payload, loading: false };
    case UPDATE_PROFILE_IMAGE:
        return { ...state, profileImage: { loading: true } };
    case UPDATE_PROFILE_IMAGE_SUCCESS:
        return { ...state, profile: action.payload, profileImage: { loading: false } };
    case UPDATE_PROFILE_IMAGE_ERROR:
        return { ...state, profileImage: { error: action.payload, loading: false } };
    case GET_BANKS:
        return { ...state, loading: true };
    case GET_BANKS_SUCCESS:
        return { ...state, banks: action.payload, loading: false };
    case GET_BANKS_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
        return state;
    }
};
