import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from './Spinner';

export const AdminRoute = ({ component: Component }) => {
    const { user } = useSelector(state => state.auth);
    if (!user) return <Spinner />;
    return !user.admin ? <Redirect to="/dashboard" /> : <Component />;
};

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
