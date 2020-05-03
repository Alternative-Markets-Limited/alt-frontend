import React from 'react';
import { Helmet } from 'react-helmet';
import { ResetPassword } from '../../login/components';

export const ResetPasswordPage = () => (
    <div>
        <Helmet>
            <title>Reset Password</title>
        </Helmet>
        <ResetPassword />
    </div>
);
