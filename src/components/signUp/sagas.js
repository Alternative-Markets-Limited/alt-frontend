import { takeEvery, put, call } from 'redux-saga/effects';
import { message as alert } from 'antd';
import { map } from 'lodash';
import alt from '../../apis/alt';
import { registerUserError, registerUserSuccess } from './actions';
import { REGISTER } from './actionTypes';

const { REGISTER_USER } = REGISTER;

function* registerUserSaga({ payload: { values, history, token } }) {
    try {
        let formData;
        if (!token) {
            formData = { ...values, email: values.email.toLowerCase() };
        } else {
            formData = { ...values, email: values.email.toLowerCase(), referrer: token };
        }
        const response = yield call(alt.post, '/auth/register', formData);
        const { data } = response.data;
        yield put(registerUserSuccess(data));
        alert.success('Registration Successful');
        history.push('/verify');
    } catch (error) {
        const { data: { data, message } } = error.response;
        if (message === 'validation error') {
            map(data, err => alert.error(err[0]));
            yield put(registerUserError(data));
        } else {
            alert.error(data);
            yield put(registerUserError(data));
        }
    }
}

export function* watchRegisterUserSaga() {
    yield takeEvery(REGISTER_USER, registerUserSaga);
}
