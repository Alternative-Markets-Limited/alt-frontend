import React from 'react';
import PropTypes from 'prop-types';

export const Logos = ({ img, imgHover, alt }) => (
    <div className="relative">
        <img
            src={img}
            alt={alt}
            className="h-full max-w-sm mx-2 transition-opacity duration-500 ease-in-out hover:opacity-0"
        />
        <img
            src={imgHover}
            alt={alt}
            className="transition-opacity duration-500 ease-in-out h-full max-w-sm mx-2 absolute inset-0 opacity-0 hover:opacity-100"
        />
    </div>
);

Logos.propTypes = {
    alt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgHover: PropTypes.string.isRequired,
};
