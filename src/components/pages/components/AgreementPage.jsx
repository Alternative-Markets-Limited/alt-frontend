import React from 'react';
import { Helmet } from 'react-helmet';
import { Agreement } from '../../agreement/components';

export const AgreementPage = () => (
    <div>
        <Helmet>
            <title>Agreement</title>
        </Helmet>
        <Agreement />
    </div>
);
