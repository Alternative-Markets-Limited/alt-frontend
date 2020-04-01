/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={props => (isAuthenticated === true
                ? <Component {...props} />
                : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                ))}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.shape(),
};

PrivateRoute.defaultProps = {
    location: {},
};
