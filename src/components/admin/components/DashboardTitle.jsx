import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const DashboardTitle = ({ icon, title }) => (
    <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={icon} size="lg" className="text-alt-blue" />
        <p className="text-sm md:text-base font-medium ml-4">{title}</p>
    </div>
);

DashboardTitle.propTypes = {
    icon: PropTypes.shape().isRequired,
    title: PropTypes.string.isRequired,
};
