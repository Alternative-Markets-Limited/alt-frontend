import React from 'react';
import { Helmet } from 'react-helmet';
import { Assets } from '../../dashboard/components';
import { BvnRoute } from '../../common/components';

export const AssetsPage = () => (
    <div>
        <Helmet>
            <title>Assets</title>
        </Helmet>
        <BvnRoute component={Assets} />
    </div>
);
