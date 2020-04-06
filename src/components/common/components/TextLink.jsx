import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TextLink = ({ name, route, className }) => (
    <li className="my-1 list-none"><Link to={route} className={`cursor-pointer hover:underline hover:text-alt-blue ${className}`}>{name}</Link></li>
);

TextLink.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};

TextLink.defaultProps = {
    className: '',
};
