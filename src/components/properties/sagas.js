import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import {
    getPropertyError, getPropertySuccess, createOrderError, createOrderSuccess
} from './actions';
import { PROPERTY, ORDER } from './actionTypes';

const { CREATE_ORDER } = ORDER;
const { GET_PROPERTY } = PROPERTY;

function* getPropertySaga({ payload: { id, token } }) {
    try {
        const response = yield call(alt.get, `/property/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response.data;
        yield put(getPropertySuccess(data));
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(getPropertyError(message));
    }
}

function* createOrderSaga({ payload: { newOrder, token, history } }) {
    try {
        const response = yield call(alt.post, '/orders', newOrder, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response.data;
        yield put(createOrderSuccess(data));
        yield history.push('/order-success');
        alert.success('You request is completed');
    } catch (error) {
        const { data: { message } } = error.response;
        history.push('/order-error');
        alert.error(message);
        yield put(createOrderError(message));
    }
}

export function* watchGetPropertySaga() {
    yield takeEvery(GET_PROPERTY, getPropertySaga);
}

export function* watchCreateOrderSaga() {
    yield takeEvery(CREATE_ORDER, createOrderSaga);
}
