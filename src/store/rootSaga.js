import { all, call } from 'redux-saga/effects';
import { watchGetPropertiesSaga } from '../components/home';
import { watchRegisterUserSaga } from '../components/signUp';
import { watchResendVerificationSaga } from '../components/verification';
import {
    watchLoginUserSaga, watchGetAuthUserSaga,
    watchForgotPasswordSaga, watchResetPasswordSaga, watchLogoutUserSaga
} from '../components/login';
import {
    watchCreateProfileSaga, watchVerifyBvnSaga, watchUpdateProfileSaga, watchUpdateProfileImageSaga, watchGetBanksSaga
} from '../components/profile';
import { watchGetGetUserOrdersSaga, watchGetUserInvoiceSaga, watchGetInvoiceSaga } from '../components/dashboard';
import { watchGetPropertySaga, watchCreateOrderSaga } from '../components/properties';
import { watchGetPostsSaga, watchGetPostSaga } from '../components/blog';
import {
    watchGetAllOrdersSaga, watchGetAllInvoiceSaga, watchGetAllUsersSaga, watchAdminCreateOrderSaga, watchDeleteInvoiceSaga
} from '../components/admin';

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
        call(watchUpdateProfileSaga),
        call(watchUpdateProfileImageSaga),
        call(watchGetBanksSaga),
        call(watchGetUserInvoiceSaga),
        call(watchGetInvoiceSaga),
        call(watchGetAllOrdersSaga),
        call(watchGetAllInvoiceSaga),
        call(watchGetAllUsersSaga),
        call(watchAdminCreateOrderSaga),
        call(watchDeleteInvoiceSaga),
    ]);
}
