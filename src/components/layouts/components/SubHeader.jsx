import React from 'react';
import PropTypes from 'prop-types';

export const SubHeader = ({ name, className, textColor }) => (
    <div className={`${className} container text-xl md:text-2xl lg:text-3xl font-bold mb-8 flex flex-col items-center text-center `}>
        <h3 className={`my-1 ${textColor}`}>{name}</h3>
        <div className="border border-alt-green w-12" />
    </div>
);

SubHeader.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    textColor: PropTypes.string,
};

SubHeader.defaultProps = {
    className: '',
    textColor: 'text-black',
};

