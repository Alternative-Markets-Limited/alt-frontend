/* eslint-disable camelcase */
import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import paystack from '../../apis/paystack';
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
        history.push('/dashboard');
    } catch (error) {
        const { data: { data, message } } = error.response;
        alert.error(message);
        yield put(createProfileError(data));
    }
}

function* verifyBvnSaga({ payload: { bvn, birthday } }) {
    try {
        const response = yield call(paystack.get, `bank/resolve_bvn/${bvn}`);
        const { data: { formatted_dob } } = response.data;
        if (formatted_dob !== birthday) {
            alert.error('Your BVN does not match records');
            yield put(verifyBvnError('BVN does not match record'));
        } else {
            yield put(verifyBvnSuccess(formatted_dob));
        }
    } catch (error) {
        const { message } = error.response.data;
        alert.error(message);
        yield put(verifyBvnError(message));
    }
}

export function* watchCreateProfileSaga() {
    yield takeEvery(CREATE_PROFILE, createProfileSaga);
}

export function* watchVerifyBvnSaga() {
    yield takeEvery(VERIFIY_BVN, verifyBvnSaga);
}
