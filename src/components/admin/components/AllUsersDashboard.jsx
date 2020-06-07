/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import {
    Table, Input, Button, Space
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { Spinner } from '../../common/components';
import { DashboardTitle } from './DashboardTitle';

export const AllUsersDashboard = () => {
    const [searchState, setSearchState] = useState({
        searchText: '',
        searchedColumn: '',
    });
    const { users, loading } = useSelector(state => state.adminDashboard);
    const { searchText, searchedColumn } = searchState;

    if (!users) return <Spinner />;

    const usersArray = users.map(({
        email, firstname, lastname, phone, bank_name, account_number, points, id,
    }) => ({
        bank: bank_name,
        email,
        key: id,
        name: `${firstname} ${lastname}`,
        number: account_number,
        phone,
        points,
    }));

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchState({ searchText: '' });
    };
    let searchInput;

    const searchStyle = { display: 'block', marginBottom: 8, width: 188 };
    const width90 = { width: 90 };
    const highlightStyle = { backgroundColor: '#ffc069', padding: 0 };

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({
            // eslint-disable-next-line react/prop-types
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div className="p-4">
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={searchStyle}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={width90}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={width90}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        render: text => (searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={highlightStyle}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (
            text
        )),
    });

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
            ...getColumnSearchProps('name'),
        },
        {
            dataIndex: 'email',
            key: 'email',
            title: 'Email',
            ...getColumnSearchProps('email'),
        },
        {
            dataIndex: 'phone',
            key: 'phone',
            title: 'Phone Number',
            ...getColumnSearchProps('phone'),
        },
        {
            dataIndex: 'bank',
            key: 'bank',
            render: bank => bank || '-',
            title: 'Bank Name',
        },
        {
            dataIndex: 'number',
            key: 'number',
            render: number => number || '-',
            title: 'Account Number',
        },
        {
            dataIndex: 'points',
            key: 'points',
            sorter: {
                compare: (a, b) => a.points - b.points,
            },
            title: 'Referral Points',
        },
    ];

    return (
        <>
            <DashboardTitle title="All Users" icon={faUserCircle} />
            <Table
                columns={columns}
                dataSource={usersArray}
                loading={loading}
                pagination={{ pageSize: 10 }}
                scroll={{ x: '100vw' }}
                className="my-4"
            />
        </>
    );
};
