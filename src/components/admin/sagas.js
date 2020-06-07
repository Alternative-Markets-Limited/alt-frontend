import { call, put, takeEvery } from 'redux-saga/effects';
import { omit } from 'lodash';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import {
    ORDERS, INVOICE, USERS, ADMIN_ORDER
} from './actionTypes';
import {
    getAllOrdersSucces, getAllOrdersError, getAllInvoiceError, getAllInvoiceSucces, getAllUsersError, getAllUsersSucces,
    adminCreateOrderError, adminCreateOrderSuccess, deleteInvoiceError, deleteInvoiceSuccess
} from './actions';

const { GET_ALL_ORDERS } = ORDERS;
const { GET_ALL_INVOICE, DELETE_INVOICE } = INVOICE;
const { GET_ALL_USERS } = USERS;
const { ADMIN_CREATE_ORDER } = ADMIN_ORDER;

function* getAllOrders({ payload }) {
    try {
        const response = yield call(alt.get, 'admin/orders', {
            headers: { Authorization: `Bearer ${payload}` },
        });
        const { data } = response.data;
        yield put(getAllOrdersSucces(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getAllOrdersError(data));
    }
}

function* getAllInvoice({ payload }) {
    try {
        const response = yield call(alt.get, 'admin/invoices', {
            headers: { Authorization: `Bearer ${payload}` },
        });
        const { data } = response.data;
        yield put(getAllInvoiceSucces(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getAllInvoiceError(data));
    }
}

function* getAllUsers({ payload }) {
    try {
        const response = yield call(alt.get, 'admin/users', {
            headers: { Authorization: `Bearer ${payload}` },
        });
        const { data } = response.data;
        yield put(getAllUsersSucces(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getAllUsersError(data));
    }
}

function* deleteInvoice({ payload: { id, token, history } }) {
    try {
        alert.loading({ content: 'Deleting Invoice', key: 'updatable' });
        const response = yield call(alt.delete, `admin/invoices/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response.data;
        yield put(deleteInvoiceSuccess(data));
        yield alert.success({ content: 'Invoice Deleted', key: 'updatable' });
        yield history.go();
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(deleteInvoiceError(data));
    }
}

function* adminCreateOrderSaga({ payload: { record, token, history } }) {
    try {
        alert.loading({ content: 'Approving Order', key: 'updatable' });
        const response = yield call(alt.post, 'admin/orders', omit(record, ['created_at', 'due_date', 'key', 'name', 'property', 'status']), {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response.data;
        yield put(adminCreateOrderSuccess(data));
        yield alert.success({ content: 'Order Approved', key: 'updatable' });
        yield history.go();
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(adminCreateOrderError(message));
    }
}

export function* watchGetAllOrdersSaga() {
    yield takeEvery(GET_ALL_ORDERS, getAllOrders);
}

export function* watchGetAllInvoiceSaga() {
    yield takeEvery(GET_ALL_INVOICE, getAllInvoice);
}

export function* watchDeleteInvoiceSaga() {
    yield takeEvery(DELETE_INVOICE, deleteInvoice);
}

export function* watchGetAllUsersSaga() {
    yield takeEvery(GET_ALL_USERS, getAllUsers);
}

export function* watchAdminCreateOrderSaga() {
    yield takeEvery(ADMIN_CREATE_ORDER, adminCreateOrderSaga);
}

