/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { Footer, SecondaryHeader } from '../../layouts/components';
import { Spinner } from '../../common/components';
import { Hero } from './Hero';
import { About } from './About';
import { KeyInformation } from './KeyInformation';
import { GridGallery } from './Gallery';
import {
    getProperty, cleanProperty, createOrder, createOrderError
} from '../actions';
import { OrderModal } from './OrderModal';

export const SingleProperty = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const { token, user } = useSelector(state => state.auth);
    const { property } = useSelector(state => state.property);
    const [order, setOrder] = useState({ price: 0, quantity: 1 });
    const { price, quantity } = order;
    const { email, phone } = user;
    useEffect(() => {
        dispatch(getProperty({ id, token }));
        return () => {
            dispatch(cleanProperty());
        };
    }, [dispatch, id, token]);

    if (!property) {
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
        setOrder({ ...order, price: min_fraction_price * value, quantity: value });
    };

    // TODO: Verify payment backend API
    const callback = response => {
        const newOrder = {
            fractions_qty: quantity,
            price,
            property_id: id,
        };
        dispatch(createOrder({ history, newOrder, token }));
    };

    const close = () => message.info('Payment Modal Closed');

    return (
        <>
            <SecondaryHeader />
            <main>
                <OrderModal
                    handleCancel={handleCancel}
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
