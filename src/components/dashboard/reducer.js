import { USER_ORDERS, INVOICES } from './actionTypes';

const {
    GET_USER_INVOICES, GET_USER_INVOICES_SUCCESS, GET_USER_INVOICES_ERROR, GET_INVOICE, GET_INVOICE_ERROR, GET_INVOICE_SUCCESS, CLEAN_INVOICE,
} = INVOICES;
const { GET_USER_ORDERS, GET_USER_ORDERS_ERROR, GET_USER_ORDERS_SUCCESS } = USER_ORDERS;

const INITIAL_STATE = {
    error: false,
    invoice: null,
    invoices: null,
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
            ...state, error: action.payload, loading: false,
        };
    case GET_USER_INVOICES:
        return { ...state, loading: true };
    case GET_USER_INVOICES_SUCCESS:
        return {
            ...state, error: false, invoices: action.payload, loading: false,
        };
    case GET_USER_INVOICES_ERROR:
        return { ...state, error: action.payload, loading: false };
    case GET_INVOICE:
        return { ...state, loading: true };
    case GET_INVOICE_SUCCESS:
        return {
            ...state, error: false, invoice: action.payload, loading: false,
        };
    case GET_INVOICE_ERROR:
        return { ...state, error: action.payload, loading: false };
    case CLEAN_INVOICE:
        return { ...state, invoice: null };
    default:
        return state;
    }
};
