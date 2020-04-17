import React from 'react';
import { SubHeader } from '../../layouts/components';
import { PartnersLogos } from './PartnersLogos';

export const OurPartners = () => (
    <>
        <div className="container px-2">
            <SubHeader name="Our Partners" />
            <p className="text-sm text-center text-sm -mt-5">We are proud to be supported by the following Partners.</p>
        </div>
        <div className="my-10">
            <PartnersLogos />
        </div>
    </>
);
