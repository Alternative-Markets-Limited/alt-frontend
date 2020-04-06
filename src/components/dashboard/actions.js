import { USER_ORDERS } from './actionTypes';

const { GET_USER_ORDERS, GET_USER_ORDERS_ERROR, GET_USER_ORDERS_SUCCESS } = USER_ORDERS;

export const getUserOrders = token => ({
    payload: token,
    type: GET_USER_ORDERS,
});

export const getUserOrdersSuccess = data => ({
    payload: data,
    type: GET_USER_ORDERS_SUCCESS,
});

export const getUserOrdersError = error => ({
    payload: error,
    type: GET_USER_ORDERS_ERROR,
});
