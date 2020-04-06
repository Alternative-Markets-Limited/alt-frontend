import React from 'react';
import PropTypes from 'prop-types';

export const Cards = ({ image, alt, description }) => (
    <div className="bg-white mx-2 p-4 lg:p-8 rounded-lg shadow-sm flex flex-row my-2 md:w-5/12">
        <img src={image} alt={alt} className="w-24 h-24 object-contain" />
        <p className="text-xs text-black ml-3">{description}</p>
    </div>
);

Cards.propTypes = {
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

