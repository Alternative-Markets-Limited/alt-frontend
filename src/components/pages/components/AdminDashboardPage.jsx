import React from 'react';
import { Helmet } from 'react-helmet';
import { Dashboard } from '../../admin/components';
import { AdminRoute } from '../../common/components';

export const AdminDashboardPage = () => (
    <div>
        <Helmet>
            <title>Admin | Dashboard</title>
        </Helmet>
        <AdminRoute component={Dashboard} />
    </div>
);
