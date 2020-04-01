import { VERIFICATION } from './actionTypes';

const { RESEND_VERIFICATION, RESEND_VERIFICATION_ERROR, RESEND_VERIFICATION_SUCCESS } = VERIFICATION;

export const resendVerification = id => ({
    payload: id,
    type: RESEND_VERIFICATION,
});

export const resendVerificationSuccess = data => ({
    payload: data,
    type: RESEND_VERIFICATION_SUCCESS,
});

export const resendVerificationError = error => ({
    payload: error,
    type: RESEND_VERIFICATION_ERROR,
});
