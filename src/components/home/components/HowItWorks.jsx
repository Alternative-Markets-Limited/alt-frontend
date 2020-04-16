import React from 'react';
import coin from '../../../assets/images/coin.svg';
import hand from '../../../assets/images/hand.svg';
import shake from '../../../assets/images/shake.svg';
import stat from '../../../assets/images/stat.svg';
import { Cards } from './Cards';

const cards = [
    {
        alt: 'coin',
        description: 'We value the cost of a property in our portfolio and divide into tokens (ALTs).',
        image: coin,
        key: 1,
    },
    {
        alt: 'shake',
        description: `You make your purchase from the ALTs available on the platform. 
        This acquisition transfers to you ownership of tokens for a holding period.`,
        image: shake,
        key: 2,
    },
    {
        alt: 'stat',
        description: 'You monitor your investment activities via your dashboard on our transparent and secure platform.',
        image: stat,
        key: 3,
    },
    {
        alt: 'hand',
        description: 'Earn returns annually on your investment for the duration of your holding period.',
        image: hand,
        key: 4,
    },
];
export const HowItWorks = () => (
    <div className="bg-gray-100 py-12 my-4">
        <div className="container flex flex-col md:flex-row md:flex-wrap md:justify-around">
            {cards.map(({
                key, description, image, alt,
            }) => (
                <Cards image={image} alt={alt} description={description} key={key} />
            ))}

        </div>
    </div>
);
