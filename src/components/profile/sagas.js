/* eslint-disable camelcase */
import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import {
    createProfileError, createProfileSuccess, verifyBvnError, verifyBvnSuccess
} from './actions';
import { getAuthUserSuccess } from '../login/actions';
import { PROFILE, BVN } from './actionTypes';

const { CREATE_PROFILE } = PROFILE;
const { VERIFIY_BVN } = BVN;

function* createProfileSaga({ payload: { values, history, token } }) {
    try {
        const response = yield call(alt.post, 'user/profile', values, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        });
        const { data, message } = response.data;
        alert.success(message);
        yield put(createProfileSuccess(data));
        yield put(getAuthUserSuccess(data));
        yield history.push('/dashboard');
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(createProfileError(data));
    }
}

function* verifyBvnSaga({ payload: { values, token } }) {
    try {
        const response = yield call(alt.post, 'user/bvn', values, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data: { verified } } = response.data;
        if (!verified) {
            yield put(verifyBvnError(verified));
            alert.error('BVN verification failed');
        } else {
            yield put(verifyBvnSuccess(verified));
            alert.success('BVN verified');
        }
    } catch (error) {
        yield put(verifyBvnError(error.response.data));
        alert.error('BVN verification failed');
    }
}

export function* watchCreateProfileSaga() {
    yield takeEvery(CREATE_PROFILE, createProfileSaga);
}

export function* watchVerifyBvnSaga() {
    yield takeEvery(VERIFIY_BVN, verifyBvnSaga);
}
