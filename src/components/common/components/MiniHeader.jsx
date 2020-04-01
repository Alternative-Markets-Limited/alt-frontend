import React from 'react';
import PropTypes from 'prop-types';

export const MiniHeader = ({ text, span }) => (
    <div className="flex flex-row items-center justify-center mb-4">
        <div className="border-2 border-alt-green w-6 mr-4" />
        <h3 className="font-bold text-xl text-alt-blue tracking-wide">
            {text}
            <span className="text-alt-green">
                &nbsp;
                {span}
            </span>
        </h3>
    </div>
);

MiniHeader.propTypes = {
    span: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
