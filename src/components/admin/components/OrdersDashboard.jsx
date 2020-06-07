/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import {
    Table, Input, Button, Space
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Spinner } from '../../common/components';
import { DashboardTitle } from './DashboardTitle';
import { formatMoney } from '../../common/helpers';

export const OrdersDashboard = () => {
    const [searchState, setSearchState] = useState({
        searchText: '',
        searchedColumn: '',
    });
    const { orders, loading } = useSelector(state => state.adminDashboard);
    const { searchText, searchedColumn } = searchState;

    if (!orders) return <Spinner />;

    const ordersArray = orders.map(({
        created_at, property, price, end_date, id, invoice_number, fractions_qty, yield_period, user,
    }) => ({
        created_at,
        end_date,
        fractions: fractions_qty,
        invoice: invoice_number,
        key: id,
        name: `${user.firstname} ${user.lastname}`,
        price,
        property: property.name,
        yield: yield_period,
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
            dataIndex: 'invoice',
            key: 'invoice',
            title: '#Invoice',
            ...getColumnSearchProps('invoice'),
        },
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
            ...getColumnSearchProps('name'),
        },
        {
            dataIndex: 'created_at',
            key: 'created_at',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Date',
        },
        {
            dataIndex: 'property',
            key: 'property',
            title: 'Property',
            ...getColumnSearchProps('property'),

        },
        {
            dataIndex: 'fractions',
            key: 'fractions',
            sorter: {
                compare: (a, b) => a.fractions - b.fractions,
            },
            title: 'Qty',
            ...getColumnSearchProps('fractions'),

        },
        {
            dataIndex: 'price',
            key: 'price',
            render: amount => formatMoney(amount),
            sorter: {
                compare: (a, b) => a.price - b.price,
            },
            title: 'Total (₦)',
            ...getColumnSearchProps('price'),

        },
        {
            dataIndex: 'yield',
            key: 'yield',
            sorter: {
                compare: (a, b) => a.yield - b.yield,
            },
            title: 'Yield Period (Months)',
            ...getColumnSearchProps('yield'),
        },
        {
            dataIndex: 'end_date',
            key: 'end_date',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Due Date',
        },
    ];

    return (
        <>
            <DashboardTitle title="All Orders" icon={faStar} />
            <Table
                columns={columns}
                dataSource={ordersArray}
                loading={loading}
                pagination={{ pageSize: 10 }}
                scroll={{ x: '100vw' }}
                className="my-4"
            />
        </>
    );
};
