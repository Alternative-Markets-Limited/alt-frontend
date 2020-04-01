import React from 'react';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import error from '../../../assets/images/close.svg';

export const EmailVerifiedFailurePage = () => (
    <>
        <main>
            <RedirectSection
                image={error}
                messageText="Verification code has expired"
                actionText="It is either you don't have an account or your account is already verified"
                name="Sign Up"
                route="/register"
            />
        </main>
        <Footer />
    </>
);
