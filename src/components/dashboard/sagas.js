import {
    takeEvery, put, call
} from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import {
    getUserOrdersError, getUserOrdersSuccess, getUserInvoicesSuccess, getUserInvoicesError, getInvoiceSuccess, getInvoiceError
} from './actions';
import { USER_ORDERS, INVOICES } from './actionTypes';

const { GET_USER_ORDERS } = USER_ORDERS;
const { GET_USER_INVOICES, GET_INVOICE } = INVOICES;

function* getUserOrdersSaga({ payload }) {
    try {
        const response = yield call(alt.get, 'user/orders', {
            headers: { Authorization: `Bearer ${payload}` },
        });
        const { data } = response.data;
        yield put(getUserOrdersSuccess(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getUserOrdersError(data));
    }
}

function* getUserInvoicesSaga({ payload }) {
    try {
        const response = yield call(alt.get, 'user/invoices', {
            headers: { Authorization: `Bearer ${payload}` },
        });
        const { data } = response.data;
        yield put(getUserInvoicesSuccess(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getUserInvoicesError(data));
    }
}

function* getInvoiceSaga({ payload: { token, id } }) {
    try {
        const response = yield call(alt.get, `user/invoices/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response.data;
        yield put(getInvoiceSuccess(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(getInvoiceError(data));
    }
}

export function* watchGetGetUserOrdersSaga() {
    yield takeEvery(GET_USER_ORDERS, getUserOrdersSaga);
}

export function* watchGetUserInvoiceSaga() {
    yield takeEvery(GET_USER_INVOICES, getUserInvoicesSaga);
}

export function* watchGetInvoiceSaga() {
    yield takeEvery(GET_INVOICE, getInvoiceSaga);
}
