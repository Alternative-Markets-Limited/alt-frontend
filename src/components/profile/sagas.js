import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import { createProfileError, createProfileSuccess } from './actions';
import { getAuthUserSuccess } from '../login/actions';
import { PROFILE } from './actionTypes';

const { CREATE_PROFILE } = PROFILE;

function* createProfileSaga({ payload: { values, history, token } }) {
    try {
        const response = yield call(alt.post, 'user/profile', values, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        });
        const { data, message } = response.data;
        alert.success(message);
        yield put(createProfileSuccess(data));
        yield put(getAuthUserSuccess(data));
        history.push('/dashboard');
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(createProfileError(data));
    }
}

export function* watchCreateProfileSaga() {
    yield takeEvery(CREATE_PROFILE, createProfileSaga);
}
