import { VERIFICATION } from './actionTypes';

const { RESEND_VERIFICATION, RESEND_VERIFICATION_ERROR, RESEND_VERIFICATION_SUCCESS } = VERIFICATION;

const INITIAL_STATE = {
    data: null,
    error: false,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case RESEND_VERIFICATION:
        return { ...state, loading: true };
    case RESEND_VERIFICATION_SUCCESS:
        return {
            ...state, data: action.payload, error: false, loading: false,
        };
    case RESEND_VERIFICATION_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
        return state;
    }
};
