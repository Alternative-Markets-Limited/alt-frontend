import React from 'react';
import PropTypes from 'prop-types';

export const Hero = ({
    image, category, name, tokens, min, max,
}) => (
    <div
        style={{
            background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${
                image
            })`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 'auto',
        }}
        className="bg-no-repeat bg-cover"
    >
        <div className="text-white pt-48 pb-10 px-2 container flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
                <span className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded">{category}</span>
                <h3 className="font-semibold text-xl text-white my-2 lg:text-2xl">{name}</h3>
                <div className="border-alt-green border-b-2 w-1/4 mb-2" />
            </div>
            <div className="flex flex-col  md:flex-row md:items-baseline ">
                <p className="font-semibold text-sm text-white my-3 mr-0 md:mr-3">
                    {tokens}
                    <span className="text-xs text-white font-normal"> fractions available</span>
                </p>
                <div className="">
                    <p className="font-semibold text-sm text-white">{`${min} - ${max}%`}</p>
                    <p className="text-xs text-white">Rental Yield</p>
                </div>
            </div>
        </div>
    </div>
);

Hero.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tokens: PropTypes.number.isRequired,
};
