/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { Helmet } from 'react-helmet';
import { Footer, SecondaryHeader } from '../../layouts/components';
import { Spinner } from '../../common/components';
import { Hero } from './Hero';
import { About } from './About';
import { KeyInformation } from './KeyInformation';
import { GridGallery } from './Gallery';
import {
    getProperty, cleanProperty, createOrder
} from '../actions';
import { getUserOrders } from '../../dashboard/actions';
import { OrderModal } from './OrderModal';

export const SingleProperty = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { slug } = useParams();
    const { token } = useSelector(state => state.auth);
    const { property } = useSelector(state => state.property);
    const { orders } = useSelector(state => state.dashboard);
    const [order, setOrder] = useState({ price: 0, quantity: 0, yieldValue: null, returns_frequency: null });
    const { price, quantity, yieldValue, returns_frequency } = order;

    useEffect(() => {
        dispatch(getProperty({ slug, token }));
        return () => {
            dispatch(cleanProperty());
        };
    }, [dispatch, slug, token]);

    useEffect(() => {
        dispatch(getUserOrders(token));
    }, [dispatch, token]);

    if (!property || !orders) {
        return <Spinner />;
    }

    const {
        id, name, image, category, min_yield, max_yield, gallery, net_rental_yield, facility,
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
        if (typeof value !== 'number' || value === '') {
            setOrder({ ...order, price: 0, quantity: 0 });
        }
        setOrder({ ...order, price: min_fraction_price * value, quantity: value });
    };

    const onSelectChange = value => {
        setOrder({ ...order, yieldValue: parseFloat(value) });
    };

    const onSelect = value => {
        setOrder({ ...order, returns_frequency: value});
    };

    const handleSubmit = () => {
        const newOrder = {
            fractions_qty: quantity,
            price,
            property_id: id,
            yield_period: yieldValue,
            returns_frequency: returns_frequency,
        };
        return dispatch(createOrder({ history, newOrder, token }));
    };

    return (
        <>
            <Helmet>
                <title>{name}</title>
            </Helmet>
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
                    yieldPeriod={net_rental_yield}
                    yieldValue={yieldValue}
                    totalAmount={price}
                    onSelectChange={onSelectChange}
                    handleSubmit={handleSubmit}
                    onSelect={onSelect}
                    returns_frequency={returns_frequency}
                />
                <section>
                    <Hero name={name} image={image} category={category.name} min={min_yield} max={max_yield} tokens={investment_population} />
                </section>
                <section>
                    <About about={about} video={video} location={location} showModal={showModal} facility={facility} />
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
                            {gallery && <GridGallery gallery={gallery} />}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
