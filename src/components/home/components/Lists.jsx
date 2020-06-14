import React from 'react';
import checkMark from '../../../assets/images/check-mark.svg';

const lists = [
    { key: 1, title: 'Low Capital Access' },
    { key: 2, title: 'Transparent Channels' },
    { key: 3, title: 'Smart and Hassle Free Transactions' },
    { key: 4, title: 'Relatively Low Risk Investment' },
    { key: 5, title: 'High Returns' },
    { key: 6, title: 'Asset Liquidity' },
];
export const Lists = () => (
    <ul>
        {lists.map(({ key, title }) => (
            <li key={key} className="flex flex-row items-center my-2">
                <img src={checkMark} alt="check-mark" className="w-3 h-3 mr-4" />
                <p className="text-sm font-medium md:text-base lg:text-xl text-black">{title}</p>
            </li>
        ))}
    </ul>
);
