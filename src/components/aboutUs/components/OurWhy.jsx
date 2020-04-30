import React from 'react';
import { SubHeader } from '../../layouts/components';
import ourWhy from '../../../assets/images/our-why.svg';

export const OurWhy = () => (
    <div className="container px-2">
        <SubHeader name="Our Why" />
        <div className="max-w-sm mx-auto my-5">
            <img src={ourWhy} alt="buildings" className="w-full h-full" />
        </div>
        <div>
            <h3 className="uppercase font-bold text-center my-3">A fration for everyone</h3>
            <p className="text-justify tracking-tight">
                Globally, access to real estate investments is limited due to the large amounts of capital required;
                prospective investors have to save up for extended periods of time or take loans to gain access to the market.
                Due to the mere size of capital involved,
                low and middle income earners are restricted from investing and profiting from the market.
                <br />
                <br />
                Real estate is proven to be a consistent way of building wealth and bettering the economic situation of investors.
                By providing a solution to this problem, we are fostering economic growth,
                helping middle and low income earners make wealth and have other opportunities for improving their lives.
                Our solution offers a cheap way to invest in real estate, users get value from investing, trading their investment
                fractions via the platform and earning returns after the holding period.
            </p>
        </div>
    </div>
);
