import React from 'react';
import coin from '../../../assets/images/coin.png';
import hand from '../../../assets/images/hand.png';
import shake from '../../../assets/images/shake.png';
import stat from '../../../assets/images/stat.png';
import { Cards } from './Cards';

const cards = [
    {
        alt: 'coin',
        description: 'We value the cost of a property in our portfolio and divide into tokens (ALTs)',
        image: coin,
        key: 1,
    },
    {
        alt: 'shake',
        description: `You make your purchase from the tokens (ALTs) available on the platform. 
        This acquisition transfers to you ownership of tokens for a holding period of 5 years.`,
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
