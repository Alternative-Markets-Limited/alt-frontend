import { REGISTER } from './actionTypes';

const { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } = REGISTER;

const INITIAL_STATE = {
    error: false,
    loading: false,
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case REGISTER_USER:
        return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
        return {
            ...state, error: false, loading: false, user: action.payload,
        };
    case REGISTER_USER_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
        return state;
    }
};
