/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <Route {...rest} render={props => (isAuthenticated === true ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
    );
};

AuthRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
