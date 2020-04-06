import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import alt from '../../apis/alt';
import { resendVerificationError, resendVerificationSuccess } from './actions';
import { VERIFICATION } from './actionTypes';

const { RESEND_VERIFICATION } = VERIFICATION;

function* resendVerificationSaga({ payload }) {
    try {
        const response = yield call(alt.post, `auth/email/verify/request_verification/${payload}`);
        const { message } = response.data;
        alert.success(message);
        yield put(resendVerificationSuccess(message));
    } catch (error) {
        const { data: { data } } = error.response;
        alert.error(data);
        yield put(resendVerificationError(data));
    }
}

export function* watchResendVerificationSaga() {
    yield takeEvery(RESEND_VERIFICATION, resendVerificationSaga);
}
