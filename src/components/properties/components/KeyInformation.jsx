import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../common/helpers';

export const KeyInformation = ({
    min, max, tokens, price, holdingPeriod, brochure,
}) => {
    const keyInfo = [
        {
            key: 1,
            text: `${min}-${max}%`,
            unit: 'roi',
        },
        {
            key: 2,
            text: tokens,
            unit: 'available alts',
        },
        {
            key: 3,
            text: `₦${formatMoney(price)}`,
            unit: 'per alts',
        },
        {
            key: 4,
            text: holdingPeriod.length > 1 ? `${Math.min(...holdingPeriod)} - ${Math.max(...holdingPeriod)} Months` : `${holdingPeriod[0]} Months`,
            unit: 'holding period',
        },
    ];

    return (
        <div className="container px-2">
            <div className="max-w-xs rounded-lg px-4 py-6 shadow-lg mx-auto xl:mx-0">
                <div className="container text-sm font-bold mb-3 flex flex-col items-center text-center">
                    <h3 className="my-1">Key Information</h3>
                    <div className="border border-alt-green w-12" />
                </div>
                {keyInfo.map(({ key, text, unit }) => (
                    <div key={key} className="mb-3 flex flex-col items-center">
                        <h3 className="text-base md:text-xl  text-black font-semibold">{text}</h3>
                        <p className="uppercase text-gray-700 text-xs md:text-sm mt-1">{unit}</p>
                        <div className="border text-gray-300 opacity-50 w-3/4 mt-3" />
                    </div>
                ))}
                {brochure ? (
                    <div className="mt-8">
                        <a className="btn-secondary" target="_blank" rel="noopener noreferrer" href={brochure}>
                            Download Brochure
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

KeyInformation.propTypes = {
    brochure: PropTypes.string,
    holdingPeriod: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tokens: PropTypes.number.isRequired,
};

KeyInformation.defaultProps = {
    brochure: null,
};
