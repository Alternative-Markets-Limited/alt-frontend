/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Table, Badge } from 'antd';
import moment from 'moment';
import { Spinner } from '../../common/components';
import { formatMoney } from '../../common/helpers';
import { MiniHeader, Footer, SecondaryHeader } from '../../layouts/components';
import { getUserOrders } from '../actions';

export const Transactions = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { orders, loading } = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(getUserOrders(token));
    }, [dispatch, token]);

    if (!orders) {
        return <Spinner />;
    }

    const propertiesArray = orders.map(({
        created_at, property, fractions_qty, price, id, active, end_date,
    }) => ({
        active, created_at, end_date, fractions_qty, key: id, price, property: property.name,
    }));

    const columns = [
        {
            dataIndex: 'created_at',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Date Created',

        },
        {
            dataIndex: 'property',
            title: 'Property Name',
        },
        {
            dataIndex: 'fractions_qty',
            title: 'Total Alts',
        },
        {
            dataIndex: 'price',
            render: amount => `₦${formatMoney(amount)}`,
            title: 'Total Amount',
        },
        {
            dataIndex: 'active',
            // eslint-disable-next-line react/display-name
            render: status => (
                <span>
                    <Badge status={status ? 'success' : 'error'} />
                    {status ? 'Active' : 'Pending'}
                </span>
            ),
            title: 'Status',
        },
        {
            dataIndex: 'end_date',
            render: date => moment(date).format('DD-MM-YYYY'),
            title: 'Maturity Date',

        },
    ];

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                    <MiniHeader name="My Transactions" icon={faCreditCard} />
                </section>
                <section className="container px-2 my-8 ">
                    <Table
                        columns={columns}
                        dataSource={propertiesArray}
                        pagination={{ pageSize: 10 }}
                        loading={loading}
                        scroll={{ x: '100vw' }}
                        summary={pageData => {
                            let totalFractions = 0;
                            let totalAmount = 0;
                            pageData.forEach(({ fractions_qty, price }) => {
                                totalFractions += fractions_qty;
                                totalAmount += price;
                            });
                            return (
                                <>
                                    <tr>
                                        <th>Total</th>
                                        <td />
                                        <td>
                                            <p>{totalFractions}</p>
                                        </td>
                                        <td>
                                            <p>{`₦${formatMoney(totalAmount)}`}</p>
                                        </td>
                                    </tr>
                                </>
                            );
                        }}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
};
