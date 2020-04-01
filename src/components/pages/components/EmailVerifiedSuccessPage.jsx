import React from 'react';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import success from '../../../assets/images/tick.svg';

export const EmailVerifiedSuccessPage = () => (
    <>
        <main>
            <RedirectSection
                image={success}
                messageText="Verification successful"
                actionText="You have successfully verified your account. Please login to continue"
                name="Login"
                route="/login"
            />
        </main>
        <Footer />
    </>
);
