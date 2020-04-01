import {
    takeEvery, put, call
} from 'redux-saga/effects';
import { message as alert } from 'antd';
import { omit } from 'lodash';
import jwtDecode from 'jwt-decode';
import alt from '../../apis/alt';
import {
    loginUserError, loginUserSuccess, getAuthUserSuccess,
    getAuthUserError, forgotPasswordSuccess, forgotPasswordError, resetPasswordSuccess, resetPasswordError,
    logoutUserError, logoutUserSuccess
} from './actions';
import {
    LOGIN, AUTH_USER, PASSWORD, LOGOUT
} from './actionTypes';

const { FORGOT_PASSWORD, RESET_PASSWORD } = PASSWORD;
const { LOGIN_USER } = LOGIN;
const { GET_AUTH_USER } = AUTH_USER;
const { LOGOUT_USER } = LOGOUT;

const getUser = async token => {
    const response = await alt.get('auth/user', { headers: { Authorization: `Bearer ${token}` } });
    const { data } = response.data;
    return data;
};

function* getAuthUserSaga({ payload }) {
    try {
        const decodedToken = jwtDecode(payload);
        if (decodedToken.exp * 1000 < Date.now() || !decodedToken) {
            yield put(getAuthUserError('token expired'));
            alert.warning('Session Expired');
        } else {
            const user = yield getUser(payload);
            yield put(getAuthUserSuccess(user));
        }
    } catch (error) {
        const { data } = error.response;
        yield put(getAuthUserError(data));
    }
}

function* loginUserSaga({ payload: { values, history, pathname } }) {
    try {
        const response = yield call(alt.post, '/auth/login', omit(values, ['remember']));
        const { data: { token } } = response.data;
        yield put(loginUserSuccess(token));
        yield alert.success('Login Successful');
        yield getAuthUserSaga({ payload: token });
        localStorage.setItem('token', token);
        yield history.push(pathname);
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(loginUserError(message));
    }
}

function* forgotPasswordSaga({ payload: { value: { email }, form } }) {
    try {
        const response = yield call(alt.post, `/password/email?email=${email}`);
        const { data: { success, error, message } } = response;
        if (success) {
            alert.success(message);
            form.resetFields();
            yield put(forgotPasswordSuccess(message));
        } else {
            alert.error(error);
            yield put(forgotPasswordError(error));
        }
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(forgotPasswordError(message));
    }
}

function* resetPasswordSaga({ payload: { values: { email, password }, history, token } }) {
    try {
        const response = yield call(alt.post, `password/reset/${token}?email=${email}&password=${password}&token=${token}`);
        const { data: { success, message, error } } = response;
        if (success) {
            alert.success(message);
            yield put(resetPasswordSuccess(message));
            history.push('/login');
        } else {
            alert.error(error);
            yield put(resetPasswordError(error));
        }
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(resetPasswordError(message));
    }
}

function* logoutUserSaga({ payload: { token, history } }) {
    try {
        alert.loading({ content: 'Logging out', key: 'updatable' });
        const response = yield call(alt.post, '/auth/logout', null, { headers: { Authorization: `Bearer ${token}` } });
        const { message } = response.data;
        yield put(logoutUserSuccess(message));
        yield localStorage.removeItem('token');
        yield alert.success({ content: 'You have logged out', key: 'updatable' });
        yield history.push('/login');
    } catch (error) {
        const { data: { message } } = error.response;
        alert.error(message);
        yield put(logoutUserError(message));
    }
}

export function* watchLogoutUserSaga() {
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
}

export function* watchForgotPasswordSaga() {
    yield takeEvery(FORGOT_PASSWORD, forgotPasswordSaga);
}

export function* watchLoginUserSaga() {
    yield takeEvery(LOGIN_USER, loginUserSaga);
}

export function* watchResetPasswordSaga() {
    yield takeEvery(RESET_PASSWORD, resetPasswordSaga);
}

export function* watchGetAuthUserSaga() {
    yield takeEvery(GET_AUTH_USER, getAuthUserSaga);
}
