import { all, call } from 'redux-saga/effects';
import { watchGetPropertiesSaga } from '../components/home';
import { watchRegisterUserSaga } from '../components/signUp';
import { watchResendVerificationSaga } from '../components/verification';
import {
    watchLoginUserSaga, watchGetAuthUserSaga,
    watchForgotPasswordSaga, watchResetPasswordSaga, watchLogoutUserSaga
} from '../components/login';
import { watchCreateProfileSaga, watchVerifyBvnSaga } from '../components/profile';
import { watchGetGetUserOrdersSaga } from '../components/dashboard';
import { watchGetPropertySaga, watchCreateOrderSaga } from '../components/properties';
import { watchGetPostsSaga, watchGetPostSaga } from '../components/blog';

export default function* rootSaga() {
    yield all([
        call(watchGetPropertiesSaga),
        call(watchRegisterUserSaga),
        call(watchResendVerificationSaga),
        call(watchLoginUserSaga),
        call(watchGetAuthUserSaga),
        call(watchCreateProfileSaga),
        call(watchGetGetUserOrdersSaga),
        call(watchGetPropertySaga),
        call(watchCreateOrderSaga),
        call(watchForgotPasswordSaga),
        call(watchResetPasswordSaga),
        call(watchLogoutUserSaga),
        call(watchVerifyBvnSaga),
        call(watchGetPostsSaga),
        call(watchGetPostSaga),
    ]);
}
