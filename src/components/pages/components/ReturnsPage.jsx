import React from 'react';
import { Helmet } from 'react-helmet';
import { Returns } from '../../dashboard/components';
import { BvnRoute } from '../../common/components';

export const ReturnsPage = () => (
    <div>
        <Helmet>
            <title>Returns</title>
        </Helmet>
        <BvnRoute component={Returns} />
    </div>
);
