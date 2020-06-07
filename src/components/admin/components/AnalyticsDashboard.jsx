/* eslint-disable camelcase */
import React from 'react';
import {
    faChartBar,
    // faMoneyBillAlt,
    faFile
} from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import { Table, Popconfirm, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DashboardTitle } from './DashboardTitle';
import { StatsCard } from './StatsCard';
// import { SalesReport } from './SalesReport';
import { formatMoney } from '../../common/helpers';
import { Spinner } from '../../common/components';
import { adminCreateOrder, deleteInvoice } from '../actions';

export const AnalyticsDashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        orders, invoice, users, loading,
    } = useSelector(state => state.adminDashboard);
    const { token } = useSelector(state => state.auth);

    if (!(orders && invoice && users)) return <Spinner />;

    const pendingInvoice = invoice.filter(inv => !inv.status);

    const columns = [
        {
            dataIndex: 'invoice_number',
            title: '#Invoice',
        },
        {
            dataIndex: 'name',
            title: 'Name',
        },
        {
            dataIndex: 'created_at',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Date',

        },
        {
            dataIndex: 'property',
            title: 'Property',
        },
        {
            dataIndex: 'fractions_qty',
            sorter: {
                compare: (a, b) => a.fractions_qty - b.fractions_qty,
            },
            title: 'Qty',
        },
        {
            dataIndex: 'price',
            render: amount => formatMoney(amount),
            sorter: {
                compare: (a, b) => a.price - b.price,
            },
            title: 'Total (₦)',
        },
        {
            dataIndex: 'yield_period',
            sorter: {
                compare: (a, b) => a.yield_period - b.yield_period,
            },
            title: 'Yield Period (Months)',

        },
        {
            dataIndex: 'due_date',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Due Date',

        },
        {
            dataIndex: 'key',
            // eslint-disable-next-line react/display-name
            render: (id, record) => (
                <>
                    <Popconfirm title="Confirm Approval?" onConfirm={() => dispatch(adminCreateOrder({ history, record, token }))}>
                        <Button type="link" size="small">Approve</Button>
                    </Popconfirm>
                    <Popconfirm title="Confirm Delete?" onConfirm={() => dispatch(deleteInvoice({ history, id, token }))}>
                        <Button type="link" danger size="small">Delete</Button>
                    </Popconfirm>
                </>
            ),

        },
    ];

    const invoicesArray = pendingInvoice.map(({
        created_at, property, price, status, due_date, id, invoice_number, fractions_qty, yield_period, user,
    }) => ({
        created_at,
        due_date,
        fractions_qty,
        invoice_number,
        key: id,
        name: `${user.firstname} ${user.lastname}`,
        price,
        property: property.name,
        property_id: property.id,
        status,
        user_id: user.id,
        yield_period,
    }));

    const statsCards = [
        {
            amount: orders.length, color: 'text-green-600', key: 1, subtitle: 'Orders', title: 'Total Orders',
        },
        {
            amount: pendingInvoice.length, color: 'text-red-600', key: 2, subtitle: 'Invoice', title: 'Pending Invoice',
        },
        {
            amount: users.length, color: 'text-blue-600', key: 3, subtitle: 'Users', title: 'Total Users',
        },
    ];

    return (
        <>
            <DashboardTitle icon={faChartBar} title="Analytics Dashboard" />
            <section className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {statsCards.map(({
                    key, amount, title, subtitle, color,
                }) => (
                    <StatsCard key={key} amount={amount} title={title} subtitle={subtitle} color={color} />
                ))}
            </section>
            <section>
                {/* <div className="my-8 px-6 py-4 rounded shadow-md">
                    <DashboardTitle title="Sales Report" icon={faMoneyBillAlt} />
                    <SalesReport orders={orders} />
                </div> */}
                <DashboardTitle title="Pending Invoices" icon={faFile} />
                <Table
                    columns={columns}
                    dataSource={invoicesArray}
                    pagination={{ pageSize: 10 }}
                    className="my-4"
                    loading={loading}
                    scroll={{ x: '100vw' }}
                />
            </section>
        </>
    );
};
