import { USER_ORDERS } from './actionTypes';

const { GET_USER_ORDERS, GET_USER_ORDERS_ERROR, GET_USER_ORDERS_SUCCESS } = USER_ORDERS;

const INITIAL_STATE = {
    error: false,
    loading: false,
    orders: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case GET_USER_ORDERS:
        return { ...state, loading: true };
    case GET_USER_ORDERS_SUCCESS:
        return {
            ...state, error: false, loading: false, orders: action.payload,
        };
    case GET_USER_ORDERS_ERROR:
        return {
            ...state, error: action.payload, loading: false, orders: null,
        };
    default:
        return state;
    }
};
