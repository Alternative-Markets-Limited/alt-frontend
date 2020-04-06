import React from 'react';
import { useSelector } from 'react-redux';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { WhyAlts } from './WhyAlts';
import { SubHeader, Footer } from '../../layouts/components';
import { PropertyCard, Spinner } from '../../common/components';

export const Home = () => {
    const { properties } = useSelector(state => state.home);

    if (!properties) {
        return <Spinner />;
    }

    if (!properties.length) {
        return <h3 className="text-center text-base md:text-xl text-black font-semibold">There are no properties available at the moment</h3>;
    }

    return (
        <>
            <main>
                <section className="pt-0 md:pt-10">
                    <Hero />
                </section>
                <section>
                    <SubHeader name="How it works" />
                    <HowItWorks />
                </section>
                <section>
                    <SubHeader name="Why You Should Invest In ALTs" className="mt-8" />
                    <WhyAlts />
                </section>
                <section className="container mb-10 px-2">
                    <SubHeader name="Recent Properties" className="mt-8" />
                    <PropertyCard properties={properties} />
                </section>
            </main>
            <Footer />
        </>
    );
};
