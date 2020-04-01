import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

export const MiniHeader = ({ name, searchBar, icon }) => (
    <div className="bg-alt-blue text-white py-10">
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={icon} size="2x" />
                <p className="font-semibold text-xl ml-5">{name}</p>
            </div>
            {searchBar ? (
                <Search
                    placeholder="Search Properties"
                    className="mt-4 md:mt-0 appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight md:w-1/2"
                />
            ) : null}
        </div>
    </div>
);

MiniHeader.propTypes = {
    icon: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    searchBar: PropTypes.bool,
};

MiniHeader.defaultProps = {
    searchBar: false,
};

