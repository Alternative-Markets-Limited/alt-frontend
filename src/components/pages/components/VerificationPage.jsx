import React from 'react';
import { Helmet } from 'react-helmet';
import { Verification } from '../../verification/components';

export const VerificationPage = () => (
    <div>
        <Helmet>
            <title>Verification</title>
        </Helmet>
        <Verification />
    </div>
);
