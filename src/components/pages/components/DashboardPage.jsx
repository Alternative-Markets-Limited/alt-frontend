import React from 'react';
import { Helmet } from 'react-helmet';
import { Dashboard } from '../../dashboard/components';
import { BvnRoute } from '../../common/components';

export const DashboardPage = () => (
    <div>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <BvnRoute component={Dashboard} />
    </div>
);

