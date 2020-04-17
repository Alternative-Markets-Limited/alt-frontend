import React from 'react';
import { Footer } from '../../layouts/components';
import { AboutUsHeader } from './AboutUsHeader';
import { OurWhy } from './OurWhy';
import { OurPartners } from './OurPartners';

export const AboutUs = () => (
    <>
        <main>
            <section className="pt-16">
                <AboutUsHeader />
            </section>
            <section className="bg-gray-100 py-10 mb-10">
                <OurWhy />
            </section>
            <section>
                <OurPartners />
            </section>
        </main>
        <Footer />
    </>
);
