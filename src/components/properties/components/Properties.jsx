import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { Footer, MiniHeader, SecondaryHeader } from '../../layouts/components';
import { PropertyCard } from '../../common/components/PropertyCard';
import { Spinner } from '../../common/components';
import { filterArray } from '../../common/helpers';
import { searchProperties } from '../../home/actions';

export const Properties = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const { properties, filteredProperties } = useSelector(state => state.home);

    if (!properties) {
        return <Spinner />;
    }

    if (!properties.length) {
        return <h3 className="text-center text-base md:text-xl text-black font-semibold">No properties found!</h3>;
    }

    const filters = {
        name: name => name.toLowerCase().includes(term.toLowerCase() || !term),
    };

    const onChange = e => {
        setTerm(e.target.value);
        const filter = filterArray(properties, filters);
        const result = e.target.value === '' || e.target.value.length <= 1 ? properties : filter;
        dispatch(searchProperties(result));
    };

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                    <MiniHeader name="Properties" icon={faBuilding} searchBar onChange={onChange} />
                </section>
                <section className="container px-2 my-8">
                    {!filteredProperties.length
                        ? <h3 className="text-center text-base md:text-xl text-black font-semibold">No properties found!</h3>
                        : <PropertyCard properties={filteredProperties} />}
                </section>
            </main>
            <Footer />
        </>
    );
};
