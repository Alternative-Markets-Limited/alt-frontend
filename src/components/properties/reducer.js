import { PROPERTY, ORDER } from './actionTypes';

const {
    GET_PROPERTY, GET_PROPERTY_ERROR, GET_PROPERTY_SUCCESS, CLEAN_PROPERTY,
} = PROPERTY;

const { CREATE_ORDER, CREATE_ORDER_ERROR, CREATE_ORDER_SUCCESS } = ORDER;

const INITIAL_STATE = {
    error: false,
    loading: false,
    order: null,
    property: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case GET_PROPERTY:
        return { ...state, loading: true };
    case GET_PROPERTY_SUCCESS:
        return {
            ...state, error: false, loading: false, property: action.payload,
        };
    case GET_PROPERTY_ERROR:
        return { ...state, error: action.payload, loading: false };
    case CLEAN_PROPERTY:
        return { ...state, property: null };
    case CREATE_ORDER:
        return { ...state, loading: true };
    case CREATE_ORDER_SUCCESS:
        return { ...state, loading: false, order: action.payload };
    case CREATE_ORDER_ERROR:
        return { ...state, error: action.payload };
    default:
        return state;
    }
};
