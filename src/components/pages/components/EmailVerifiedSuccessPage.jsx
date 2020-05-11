import React from 'react';
import { Helmet } from 'react-helmet';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import success from '../../../assets/images/tick.svg';

export const EmailVerifiedSuccessPage = () => (
    <>
        <Helmet>
            <title>Email Verification - Success</title>
        </Helmet>
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
