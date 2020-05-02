import React from 'react';
import { Helmet } from 'react-helmet';
import { SignUp } from '../../signUp/components';

export const SignUpPage = () => (
    <div>
        <Helmet>
            <title>Sign Up</title>
        </Helmet>
        <SignUp />
    </div>
);
