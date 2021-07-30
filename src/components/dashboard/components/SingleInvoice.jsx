/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Table, Badge } from 'antd';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { SecondaryHeader, MiniHeader, Footer } from '../../layouts/components';
import { formatMoney } from '../../common/helpers';
import { getInvoice, cleanInvoice } from '../actions';
import { Spinner } from '../../common/components';

export const SingleInvoice = () => {
    const { token } = useSelector(state => state.auth);
    const { invoice, loading } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getInvoice({ id, token }));
        return () => dispatch(cleanInvoice());
    }, [id, token, dispatch]);

    if (!invoice) {
        return <Spinner />;
    }

    const {
        due_date, fractions_qty, invoice_number, price, property: { name }, status, returns_frequency
    } = invoice;

    const columns = [
        {
            dataIndex: 'name',
            title: 'Name',
        },
        {
            dataIndex: 'qty',
            title: 'Alts Quantity',
        },
        {
            dataIndex: 'price',
            render: amount => formatMoney(amount),
            title: '(₦) Price',
        },
    ];

    const data = [
        {
            key: id,
            name,
            price,
            qty: fractions_qty,
        },
    ];

    const bankDetails = [
        { key: 1, title: 'Account Name', value: 'Alternative Markets Limited' },
        { key: 2, title: 'Bank Name', value: 'Zenith Bank' },
        { key: 3, title: 'Account Number', value: '1017303698' },
    ];

    return (
        <>
            <Helmet>
                <title>
                    {`Invoice #${invoice_number}`}
                </title>
            </Helmet>
            {!invoice ? <Spinner /> : (
                <main>
                    <section className="pt-16">
                        <SecondaryHeader />
                        <MiniHeader name="Invoice" icon={faFile} />
                    </section>
                    <section className="container px-2 my-8 ">
                        <div className="mt-4 mb-8">
                            <div className="flex flex-row items-center">
                                <h3 className="font-bold text-xl md:text-3xl mr-2">
                                    {`Invoice #${invoice_number}`}
                                </h3>
                                <p className="text-base font-normal">
                                    <Badge status={parseInt(status) === 1 ? 'success' : 'error'} />
                                    {parseInt(status) === 1 ? 'Paid' : 'Unpaid'}
                                </p>
                            </div>
                            {!parseInt(status) && <p>{`Due date: ${moment(due_date).format('dddd, MMMM Do YYYY')}`}</p>}
                        </div>
                        {!parseInt(status) && (
                            <div className="mb-8">
                                <p className="text-base">
                                    Complete your payment to the account number below and send the evidence of payment with the invoice number to
                                    <a href={`mailto:hello@alt.ng?subject=Invoice Number ${invoice_number}`}> hello@alt.ng</a>
                                </p>
                                <div className="my-4">
                                    {bankDetails.map(({ key, title, value }) => (
                                        <p key={key} className="my-2">
                                            <strong>
                                                {`${title}: `}
                                            </strong>
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            loading={loading}
                            bordered
                            summary={pageData => {
                                let totalAmount = 0;
                                // eslint-disable-next-line no-shadow
                                pageData.forEach(({ price }) => {
                                    totalAmount += parseInt(price);
                                });
                                return (
                                    <>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td />
                                            <td>
                                                <p>{formatMoney(totalAmount)}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td />
                                            <td>
                                                <p>{`₦${formatMoney(totalAmount)}`}</p>
                                            </td>
                                        </tr>
                                    </>
                                );
                            }}
                        />
                        <p className="my-4 italic font-extrabold">
                        * Returns are set to be received: "{returns_frequency.toUpperCase()}"
                        </p>
                    </section>
                </main>
            )}

            <Footer />
        </>
    );
};
