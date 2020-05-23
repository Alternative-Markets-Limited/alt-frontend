/* eslint-disable camelcase */
import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import { map, omit } from 'lodash';
import alt from '../../apis/alt';
import { paystack } from '../../apis/fintech';
import {
    createProfileError, createProfileSuccess, verifyBvnError, verifyBvnSuccess, updateProfileSuccess, updateProfileError,
    updateProfileImageError, updateProfileImageSuccess, getBanksSuccess, getBanksError
} from './actions';
import { getAuthUserSuccess } from '../login/actions';
import { PROFILE, BVN, BANKS } from './actionTypes';

const { CREATE_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_IMAGE } = PROFILE;
const { VERIFIY_BVN } = BVN;
const { GET_BANKS } = BANKS;

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

function* updateProfileSaga({ payload: { formValues, token } }) {
    try {
        const response = yield call(alt.put, 'user/profile', omit(formValues, ['fullname']), {
            headers: { Authorization: `Bearer ${token}` },
        });
        const { data, message } = response.data;
        alert.success(message);
        yield put(updateProfileSuccess(data));
        yield put(getAuthUserSuccess(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        if (message === 'validation error') {
            map(data, err => alert.error(err[0]));
            yield put(updateProfileError(data));
        } else {
            alert.error(data);
            yield put(updateProfileError(data));
        }
    }
}

function* updateProfileImageSaga({ payload: { avatarImage, token } }) {
    try {
        const response = yield call(alt.post, 'user/profile', avatarImage, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        });
        const { data, message } = response.data;
        alert.success(message);
        yield put(updateProfileImageSuccess(data));
        yield put(getAuthUserSuccess(data));
    } catch (error) {
        const { data: { data, message } } = error.response;
        if (message === 'validation error') {
            map(data, err => alert.error(err[0]));
            yield put(updateProfileImageError(data));
        } else {
            alert.error(data);
            yield put(updateProfileImageError(data));
        }
    }
}

function* getBanksSaga() {
    try {
        const response = yield call(paystack.get, 'bank');
        const { data, message } = response.data;
        alert.success(message);
        yield put(getBanksSuccess(data));
    } catch (error) {
        alert.error('Could not fetch banks');
        yield put(getBanksError(error.response));
    }
}

export function* watchCreateProfileSaga() {
    yield takeEvery(CREATE_PROFILE, createProfileSaga);
}

export function* watchVerifyBvnSaga() {
    yield takeEvery(VERIFIY_BVN, verifyBvnSaga);
}

export function* watchUpdateProfileSaga() {
    yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}

export function* watchUpdateProfileImageSaga() {
    yield takeEvery(UPDATE_PROFILE_IMAGE, updateProfileImageSaga);
}

export function* watchGetBanksSaga() {
    yield takeEvery(GET_BANKS, getBanksSaga);
}
