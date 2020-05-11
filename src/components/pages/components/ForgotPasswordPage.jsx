import React from 'react';
import { Helmet } from 'react-helmet';
import { ForgotPassword } from '../../login/components';

export const ForgotPasswordPage = () => (
    <div>
        <Helmet>
            <title>Forgot Password</title>
        </Helmet>
        <ForgotPassword />
    </div>
);
