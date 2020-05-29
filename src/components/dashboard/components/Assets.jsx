/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { PropertyCard, Spinner } from '../../common/components';
import {
    MiniHeader, Footer, SecondaryHeader, SubHeader
} from '../../layouts/components';
import { getUserOrders } from '../actions';

export const Assets = () => {
    const { properties } = useSelector(state => state.home);
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { orders } = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(getUserOrders(token));
    }, [dispatch, token]);

    if (!orders || !properties) {
        return <Spinner />;
    }
    const propertiesArray = orders.map(({
        property, id, fractions_qty, yield_period, end_date, price,
    }) => ({
        end_date, fractions_qty, order_id: id, ...property, price, yield_period,
    }));

    if (!properties.length) {
        return <h3 className="text-center text-base md:text-xl text-black font-semibold">There are no properties available at the moment</h3>;
    }

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                    <MiniHeader name="My Assets" icon={faBox} />
                </section>
                <section className="container px-2 my-24 ">
                    {!propertiesArray.length ? (
                        <>
                            <h3 className="font-bold text-xl text-center">You presently do not have any assets</h3>
                            <p className="text-sm my-2 text-center">
                        You can start acquiring assets and earning substantial passive income right now.
                        Peek some of our high performing assets  below
                            </p>
                        </>
                    ) : (<PropertyCard properties={propertiesArray} />)}
                </section>
                <section className="mt-5 bg-gray-100 py-10">
                    <section className="container px-2">
                        <SubHeader name="Available Properties" />
                        <PropertyCard properties={properties} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
};
