import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Dashboard } from '../../dashboard/components';
import { Spinner } from '../../common/components';

export const DashboardPage = () => {
    const { user } = useSelector(state => state.auth);
    if (!user) return <Spinner />;
    return !user.bvn ? <Redirect to="/agreement" /> : <Dashboard />;
};
