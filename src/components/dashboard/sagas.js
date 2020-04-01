import {
    takeEvery, put, call
} from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import { getUserOrdersError, getUserOrdersSuccess } from './actions';
import { USER_ORDERS } from './actionTypes';

const { GET_USER_ORDERS } = USER_ORDERS;

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

export function* watchGetGetUserOrdersSaga() {
    yield takeEvery(GET_USER_ORDERS, getUserOrdersSaga);
}
