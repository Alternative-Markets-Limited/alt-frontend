import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

export const MiniHeader = ({
    name, searchBar, icon, paddingBottom, onSearch, onChange, loading,
}) => (
    <div className={`bg-alt-blue text-white pt-10 pb-${paddingBottom} relative z-10`}>
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={icon} size="2x" />
                <p className="font-semibold text-xl ml-5">{name}</p>
            </div>
            {searchBar ? (
                <Search
                    placeholder={`Search ${name}`}
                    className="mt-4 md:mt-0 appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight md:w-1/2"
                    onSearch={onSearch}
                    onChange={onChange}
                    loading={loading}
                />
            ) : null}
        </div>
    </div>
);

MiniHeader.propTypes = {
    icon: PropTypes.shape().isRequired,
    loading: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    paddingBottom: PropTypes.number,
    searchBar: PropTypes.bool,
};

MiniHeader.defaultProps = {
    loading: false,
    onChange: () => {},
    onSearch: () => {},
    paddingBottom: 10,
    searchBar: false,
};

