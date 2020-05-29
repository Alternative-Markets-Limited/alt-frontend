import { USER_ORDERS, INVOICES } from './actionTypes';

const { GET_USER_ORDERS, GET_USER_ORDERS_ERROR, GET_USER_ORDERS_SUCCESS } = USER_ORDERS;
const {
    GET_USER_INVOICES, GET_USER_INVOICES_ERROR, GET_USER_INVOICES_SUCCESS, GET_INVOICE, GET_INVOICE_ERROR, GET_INVOICE_SUCCESS, CLEAN_INVOICE,
} = INVOICES;

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

export const getUserInvoices = token => ({
    payload: token,
    type: GET_USER_INVOICES,
});

export const getUserInvoicesSuccess = data => ({
    payload: data,
    type: GET_USER_INVOICES_SUCCESS,
});

export const getUserInvoicesError = error => ({
    payload: error,
    type: GET_USER_INVOICES_ERROR,
});

export const getInvoice = data => ({
    payload: data,
    type: GET_INVOICE,
});

export const getInvoiceSuccess = data => ({
    payload: data,
    type: GET_INVOICE_SUCCESS,
});

export const getInvoiceError = error => ({
    payload: error,
    type: GET_INVOICE_ERROR,
});

export const cleanInvoice = () => ({
    type: CLEAN_INVOICE,
});

