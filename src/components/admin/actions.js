import {
    ORDERS, INVOICE, USERS, ADMIN_ORDER
} from './actionTypes';

const { GET_ALL_ORDERS, GET_ALL_ORDERS_ERROR, GET_ALL_ORDERS_SUCCESS } = ORDERS;
const {
    GET_ALL_INVOICE, GET_ALL_INVOICE_ERROR, GET_ALL_INVOICE_SUCCESS, DELETE_INVOICE, DELETE_INVOICE_ERROR, DELETE_INVOICE_SUCCESS,
} = INVOICE;
const { GET_ALL_USERS, GET_ALL_USERS_ERROR, GET_ALL_USERS_SUCCESS } = USERS;
const { ADMIN_CREATE_ORDER, ADMIN_CREATE_ORDER_ERROR, ADMIN_CREATE_ORDER_SUCCESS } = ADMIN_ORDER;

export const getAllOrders = token => ({
    payload: token,
    type: GET_ALL_ORDERS,
});

export const getAllOrdersSucces = data => ({
    payload: data,
    type: GET_ALL_ORDERS_SUCCESS,
});

export const getAllOrdersError = error => ({
    payload: error,
    type: GET_ALL_ORDERS_ERROR,
});

export const getAllInvoice = token => ({
    payload: token,
    type: GET_ALL_INVOICE,
});

export const getAllInvoiceSucces = data => ({
    payload: data,
    type: GET_ALL_INVOICE_SUCCESS,
});

export const getAllInvoiceError = error => ({
    payload: error,
    type: GET_ALL_INVOICE_ERROR,
});

export const getAllUsers = token => ({
    payload: token,
    type: GET_ALL_USERS,
});

export const getAllUsersSucces = data => ({
    payload: data,
    type: GET_ALL_USERS_SUCCESS,
});

export const getAllUsersError = error => ({
    payload: error,
    type: GET_ALL_USERS_ERROR,
});

export const adminCreateOrder = data => ({
    payload: data,
    type: ADMIN_CREATE_ORDER,
});

export const adminCreateOrderSuccess = data => ({
    payload: data,
    type: ADMIN_CREATE_ORDER_SUCCESS,
});

export const adminCreateOrderError = error => ({
    payload: error,
    type: ADMIN_CREATE_ORDER_ERROR,
});

export const deleteInvoice = id => ({
    payload: id,
    type: DELETE_INVOICE,
});

export const deleteInvoiceSuccess = data => ({
    payload: data,
    type: DELETE_INVOICE_SUCCESS,
});

export const deleteInvoiceError = error => ({
    payload: error,
    type: DELETE_INVOICE_ERROR,
});
