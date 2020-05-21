import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TextLink = ({
    name, route, className, inline,
}) => (
    <li
        className={`my-1 list-none ${inline ? 'inline' : null}`}
    >
        <Link to={route} className={`cursor-pointer hover:underline ${className}`}>
            {name}
        </Link>
    </li>
);

TextLink.propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};

TextLink.defaultProps = {
    className: '',
    inline: false,
};
