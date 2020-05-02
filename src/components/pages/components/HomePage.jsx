import React from 'react';
import { Helmet } from 'react-helmet';
import { Home } from '../../home/components';

export const HomePage = () => (
    <div>
        <Helmet>
            <title>Alt | Home</title>
        </Helmet>
        <Home />
    </div>
);

