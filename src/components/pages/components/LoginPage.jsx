import React from 'react';
import { Helmet } from 'react-helmet';
import { Login } from '../../login/components';

export const LoginPage = () => (
    <div>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <Login />
    </div>
);
