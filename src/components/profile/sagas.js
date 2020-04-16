/* eslint-disable camelcase */
import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import bvn from '../../apis/bvn';
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

function* verifyBvnSaga({ payload }) {
    try {
        const response = yield call(bvn.post, '/sfx-verify/v2/bvn', payload);
        console.log(response);
        yield put(verifyBvnSuccess(response));
        alert.success('BVN verified');
    } catch (error) {
        console.log(error);
        yield put(verifyBvnError(error));
        alert.error('Your BVN does not match records');
    }
}

export function* watchCreateProfileSaga() {
    yield takeEvery(CREATE_PROFILE, createProfileSaga);
}

export function* watchVerifyBvnSaga() {
    yield takeEvery(VERIFIY_BVN, verifyBvnSaga);
}
