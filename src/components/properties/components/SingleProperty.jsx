/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { VerifyTransaction } from 'react-flutterwave-rave';
import { Footer, SecondaryHeader } from '../../layouts/components';
import { Spinner } from '../../common/components';
import { Hero } from './Hero';
import { About } from './About';
import { KeyInformation } from './KeyInformation';
import { GridGallery } from './Gallery';
import {
    getProperty, cleanProperty, createOrder, createOrderError
} from '../actions';
import { getUserOrders } from '../../dashboard/actions';
import { OrderModal } from './OrderModal';

export const SingleProperty = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const { token, user } = useSelector(state => state.auth);
    const { property } = useSelector(state => state.property);
    const { orders } = useSelector(state => state.dashboard);
    const [order, setOrder] = useState({ price: 0, quantity: 1 });
    const { price, quantity } = order;
    const {
        email, phone, firstname, lastname,
    } = user;
    useEffect(() => {
        dispatch(getProperty({ id, token }));
        return () => {
            dispatch(cleanProperty());
        };
    }, [dispatch, id, token]);

    useEffect(() => {
        if (!orders) {
            dispatch(getUserOrders(token));
        }
    }, [token, orders]);

    if (!property || !orders) {
        return <Spinner />;
    }

    const {
        name, image, category, min_yield, max_yield, gallery,
        investment_population, about, video, location, holding_period, min_fraction_price, brochure,
    } = property;

    const showModal = () => {
        setVisible(true);
        setOrder({ ...order, price: min_fraction_price * quantity });
    };

    const handleOk = e => {
        setVisible(false);
    };

    const handleCancel = e => {
        setVisible(false);
    };

    const onChange = value => {
        if (typeof value !== 'number') return;
        setOrder({ ...order, price: min_fraction_price * value, quantity: value });
    };

    const callback = response => VerifyTransaction({
        SECKEY: process.env.REACT_APP_FLUTTER_SECK,
        live: process.env.NODE_ENV === 'production',
        txref: response.tx.txRef,
    }).then(resp => {
        const { chargeResponse } = resp.data.data.flwMeta;
        const chargeAmount = resp.data.data.amount;
        const chargeCurrency = resp.data.data.transaction_currency;
        const currency = 'NGN';
        const amount = price;

        if ((chargeResponse === '00' || chargeResponse === '0') && (chargeAmount === amount) && (chargeCurrency === currency)) {
            // Give Value and return to Success page
            const newOrder = {
                fractions_qty: quantity,
                price,
                property_id: id,
            };
            dispatch(createOrder({ history, newOrder, token }));
            return history.push('/order-success');
        }
        // Dont Give Value and return to Failure page
        dispatch(createOrderError(resp));
        return history.push('/order-error');
    })
        .catch(error => {
            dispatch(createOrderError(error));
            return history.push('/order-error');
        });

    const close = () => message.info('Payment Modal Closed');

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                </section>
                <OrderModal
                    handleCancel={handleCancel}
                    orders={orders}
                    id={id}
                    handleOk={handleOk}
                    visible={visible}
                    onChange={onChange}
                    price={price}
                    tokens={investment_population}
                    email={email}
                    phone={phone}
                    totalAmount={price}
                    callback={callback}
                    close={close}
                    firstname={firstname}
                    lastname={lastname}
                />
                <section>
                    <Hero name={name} image={image} category={category.name} min={min_yield} max={max_yield} tokens={investment_population} />
                </section>
                <section>
                    <About about={about} video={video} location={location} showModal={showModal} />
                </section>
                <section className="my-10">
                    <div className="container grid grid-cols-3 gap-4">
                        <div className="col-span-3 md:col-span-1">
                            <KeyInformation
                                tokens={investment_population}
                                max={max_yield}
                                min={min_yield}
                                holdingPeriod={holding_period}
                                price={min_fraction_price}
                                brochure={brochure}
                            />
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <GridGallery gallery={gallery} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
