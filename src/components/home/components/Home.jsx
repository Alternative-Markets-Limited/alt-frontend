import React from 'react';
import { useSelector } from 'react-redux';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { WhyAlts } from './WhyAlts';
import { SubHeader, Footer } from '../../layouts/components';
import { PropertyCard, Spinner, TextLink } from '../../common/components';

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
                <section className="bg-gray-100 mt-8 p-8 text-xs md:text-sm">
                    <p className="container text-black">
                    ALTs are issued by Alternative Markets Limited. The Alternative Markets Limited is the manager of the ALT Platform.
                    The advice provided in relation to the ALT Platform and ALTs, including on this website,
                    is general advice only and has been prepared without taking into account your objectives, financial situation or needs.
                    Before making any decision in relation to the ALT Platform or ALTs you should read the
                        <a
                            href="https://res.cloudinary.com/altdotng/image/upload/v1587034817/alt_documents/ALT_pds_04-2020_xtu0r9.pdf"
                            className="underline hover:underline hover:text-alt-blue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &nbsp;Product Disclosure Statement&nbsp;
                        </a>
                    and consider whether they are right for you. Past performance is no indication of future performance.
                    Any forecasts are subject to change without notice. Income and capital returns are not guaranteed.
                    By accessing and using this website, you agree to be bound by our
                        <TextLink route="/" name=" terms and conditions." className="underline" inline />
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
};
