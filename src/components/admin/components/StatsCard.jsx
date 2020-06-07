import React from 'react';
import PropTypes from 'prop-types';

export const StatsCard = ({
    title, subtitle, amount, color,
}) => (
    <div className="text-white py-2 px-3 rounded shadow-md flex flex-row items-center content-center justify-between">
        <div>
            <h3 className="text-gray-800 text-xs font-bold">{title}</h3>
            <p className="text-gray-500 text-xs">{subtitle}</p>
        </div>
        <p className={`text-sm ${color} font-bold`}>{amount}</p>
    </div>
);

StatsCard.propTypes = {
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
