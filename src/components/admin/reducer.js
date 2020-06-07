import {
    ORDERS, INVOICE, USERS, ADMIN_ORDER
} from './actionTypes';

const { GET_ALL_ORDERS, GET_ALL_ORDERS_ERROR, GET_ALL_ORDERS_SUCCESS } = ORDERS;
const { ADMIN_CREATE_ORDER, ADMIN_CREATE_ORDER_ERROR, ADMIN_CREATE_ORDER_SUCCESS } = ADMIN_ORDER;
const {
    GET_ALL_INVOICE_SUCCESS, GET_ALL_INVOICE_ERROR, GET_ALL_INVOICE, DELETE_INVOICE, DELETE_INVOICE_ERROR, DELETE_INVOICE_SUCCESS,
} = INVOICE;
const { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR, GET_ALL_USERS } = USERS;

const INITIAL_STATE = {
    deleteInvoice: null,
    error: null,
    invoice: null,
    loading: false,
    order: null,
    orders: null,
    users: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case GET_ALL_ORDERS:
        return { ...state, loading: true };
    case GET_ALL_ORDERS_SUCCESS:
        return { ...state, loading: false, orders: action.payload };
    case GET_ALL_ORDERS_ERROR:
        return { ...state, error: action.payload, loading: false };
    case GET_ALL_INVOICE:
        return { ...state, loading: true };
    case GET_ALL_INVOICE_SUCCESS:
        return { ...state, invoice: action.payload, loading: false };
    case GET_ALL_INVOICE_ERROR:
        return { ...state, error: action.payload, loading: false };
    case GET_ALL_USERS:
        return { ...state, loading: true };
    case GET_ALL_USERS_SUCCESS:
        return { ...state, loading: false, users: action.payload };
    case GET_ALL_USERS_ERROR:
        return { ...state, error: action.payload, loading: false };
    case ADMIN_CREATE_ORDER:
        return { ...state, loading: true };
    case ADMIN_CREATE_ORDER_SUCCESS:
        return { ...state, loading: false, order: action.payload };
    case ADMIN_CREATE_ORDER_ERROR:
        return { ...state, error: action.payload };
    case DELETE_INVOICE:
        return { ...state, loading: true };
    case DELETE_INVOICE_SUCCESS:
        return { ...state, deleteInvoice: action.payload, loading: false };
    case DELETE_INVOICE_ERROR:
        return { ...state, error: action.payload };
    default:
        return state;
    }
};
