import React from 'react';
import { useSelector } from 'react-redux';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { Footer, MiniHeader, SecondaryHeader } from '../../layouts/components';
import { PropertyCard } from '../../common/components/PropertyCard';

export const Properties = () => {
    const { properties } = useSelector(state => state.home);

    if (!properties.length) {
        return <h3 className="text-center text-base md:text-xl text-black font-semibold">There are no properties available at the moment</h3>;
    }

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                    <MiniHeader name="Properties" icon={faBuilding} searchBar />
                </section>
                <section className="container px-2 my-8">
                    <PropertyCard properties={properties} />
                </section>
            </main>
            <Footer />
        </>
    );
};
