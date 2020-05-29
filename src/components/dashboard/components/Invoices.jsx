/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Badge } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MiniHeader, Footer, SecondaryHeader } from '../../layouts/components';
import { getUserInvoices } from '../actions';
import { Spinner } from '../../common/components';
import { formatMoney } from '../../common/helpers';

export const Invoices = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { invoices, loading } = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(getUserInvoices(token));
    }, [dispatch, token]);

    if (!invoices) {
        return <Spinner />;
    }

    const invoicesArray = invoices.map(({
        created_at, property, price, status, due_date, id, invoice_number,
    }) => ({
        created_at, due_date, invoice_number, key: id, price, property: property.name, status,
    }));

    const columns = [
        {
            dataIndex: 'created_at',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Date Created',

        },
        {
            dataIndex: 'invoice_number',
            title: 'Invoice Number',
        },
        {
            dataIndex: 'property',
            title: 'Property Name',
        },
        {
            dataIndex: 'price',
            render: amount => `₦${formatMoney(amount)}`,
            title: 'Total Amount',
        },
        {
            dataIndex: 'status',
            // eslint-disable-next-line react/display-name
            render: status => (
                <span>
                    <Badge status={status ? 'success' : 'error'} />
                    {status ? 'Paid' : 'Unpaid'}
                </span>
            ),
            title: 'Status',
        },
        {
            dataIndex: 'due_date',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Due Date',

        },
        {
            dataIndex: 'key',
            // eslint-disable-next-line react/display-name
            render: id => <Link to={`invoices/${id}`} className="text-alt-blue">View</Link>,
        },
    ];

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                    <MiniHeader name="My Invoices" icon={faFile} />
                </section>
                <section className="container px-2 my-8 ">
                    <Table
                        columns={columns}
                        dataSource={invoicesArray}
                        pagination={{ pageSize: 10 }}
                        loading={loading}
                        scroll={{ x: '100vw' }}
                    />

                </section>
            </main>
            <Footer />
        </>
    );
};
