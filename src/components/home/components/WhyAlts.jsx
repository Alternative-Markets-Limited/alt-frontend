import React from 'react';
import whyUs from '../../../assets/images/why-us.svg';
import { Lists } from './Lists';

export const WhyAlts = () => (
    <div>
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-around">
            <Lists />
            <img src={whyUs} alt="why-us" className="w-full h-full md:w-1/3" />
        </div>
    </div>
);
