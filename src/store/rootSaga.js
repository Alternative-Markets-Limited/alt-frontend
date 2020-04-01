import { all, call } from 'redux-saga/effects';
import { watchGetPropertiesSaga } from '../components/home';
import { watchRegisterUserSaga } from '../components/signUp';
import { watchResendVerificationSaga } from '../components/verification';
import {
    watchLoginUserSaga, watchGetAuthUserSaga,
    watchForgotPasswordSaga, watchResetPasswordSaga, watchLogoutUserSaga
} from '../components/login';
import { watchCreateProfileSaga } from '../components/profile';
import { watchGetGetUserOrdersSaga } from '../components/dashboard';
import { watchGetPropertySaga, watchCreateOrderSaga } from '../components/properties';

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
    ]);
}
