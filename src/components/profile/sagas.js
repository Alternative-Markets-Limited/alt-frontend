/* eslint-disable camelcase */
import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import { map } from 'lodash';
import alt from '../../apis/alt';
import {
    createProfileError, createProfileSuccess, verifyBvnError, verifyBvnSuccess
} from './actions';
import { getAuthUserSuccess } from '../login/actions';
import { PROFILE, BVN } from './actionTypes';

const { CREATE_PROFILE } = PROFILE;
const { VERIFIY_BVN } = BVN;

function* createProfileSaga({ payload: { formattedFormValues, history, token } }) {
    try {
        const response = yield call(alt.post, 'user/profile', formattedFormValues, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data, message } = response.data;
        alert.success(message);
        yield put(createProfileSuccess(data));
        yield put(getAuthUserSuccess(data));
        yield history.push('/dashboard');
    } catch (error) {
        const { data: { data, message } } = error.response;
        if (message === 'validation error') {
            map(data, err => alert.error(err[0]));
            yield put(createProfileError(data));
        } else {
            alert.error(data);
            yield put(createProfileError(data));
        }
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
            alert.error('Firstname, Lastname and Date of Birth must correspond  with BVN');
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
