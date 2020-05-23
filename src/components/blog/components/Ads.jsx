import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonLink, Spinner } from '../../common/components';

export const Ads = () => {
    const { properties } = useSelector(state => state.home);

    if (!properties) {
        return <Spinner />;
    }

    if (!properties.length) {
        return <h3 className="text-center text-base md:text-xl text-black font-semibold">No property on sale</h3>;
    }

    const determineIndex = () => {
        let index = 0;
        if (properties.length > 1) {
            index = Math.floor(Math.random() * properties.length);
        }
        return index;
    };

    const { id, name, image } = properties[determineIndex()];

    return (
        <>
            <div className="w-2/3 mt-10 -mb-4 mx-auto relative z-10">
                <div className="py-2 px-8 rounded bg-green-500  shadow-md">
                    <p className="font-medium text-white text-center">Now Selling</p>
                </div>
            </div>
            <div
                className="relative py-13 px-4 bg-no-repeat bg-cover rounded -z-10"
                style={{
                    background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${
                        image
                    })`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 'auto',
                }}
            >
                <div className="flex flex-col items-center">
                    <h3 className="text-center text-white text-3xl mt-2 mb-1">{name}</h3>
                    <p className="text-center text-white text-sm mb-4">Limited Fractions Availabe</p>
                    <div className="max-w-sm mx-auto mt-4">
                        <ButtonLink name="Get Started" route={`/properties/${id}`} className="w-2/3" />
                    </div>
                </div>
            </div>
        </>
    );
};
