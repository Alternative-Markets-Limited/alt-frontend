import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ButtonLink = ({
    name, primary, className, route,
}) => (
    <Link
        to={route}
        className={`py-2 px-4 rounded text-center uppercase text-xs w-full ${className} ${
            primary
                ? 'bg-alt-blue hover:bg-alt-blue-darker text-white hover:text-white'
                : 'bg-transparent hover:bg-alt-blue hover:text-white border border-alt-blue text-alt-blue hover:border-transparent'
        } `}
    >
        {name}
    </Link>
);

ButtonLink.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    route: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
    className: '',
    primary: true,
};
