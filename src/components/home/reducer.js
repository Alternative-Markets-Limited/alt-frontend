import { PROPERTIES } from './actionTypes';

const { GET_PROPERTIES, GET_PROPERTIES_ERROR, GET_PROPERTIES_SUCCESS } = PROPERTIES;

const INITIAL_STATE = {
    error: false,
    loading: false,
    properties: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case GET_PROPERTIES:
        return { ...state, loading: true };
    case GET_PROPERTIES_SUCCESS:
        return {
            ...state, error: false, loading: false, properties: action.payload,
        };
    case GET_PROPERTIES_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
        return state;
    }
};
