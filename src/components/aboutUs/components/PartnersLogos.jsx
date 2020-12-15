import React from 'react';
import gpp from '../../../assets/images/gpp.png';
import gppHover from '../../../assets/images/gpp-hover.png';
import zenith from '../../../assets/images/zenith.png';
import zenithHover from '../../../assets/images/zenith-hover.png';
import creativeEnterprise from '../../../assets/images/creative-enterprise.png';
import creativeEnterpriseHover from '../../../assets/images/creative-enterprise-hover.png';
import flutterwave from '../../../assets/images/flutterwave.png';
import flutterwaveHover from '../../../assets/images/flutterwave-hover.png';
import verified from '../../../assets/images/verified.png';
import verifiedHover from '../../../assets/images/verified-hover.png';
import nedcom from '../../../assets/images/nedcom.png';
import nedcomHover from '../../../assets/images/nedcom-hover.png';

import { Logos } from './Logos';

const logos = [
    {
        alt: 'gpp', img: gpp, imgHover: gppHover, key: 1,
    },
    {
        alt: 'zenit', img: zenith, imgHover: zenithHover, key: 2,
    },
    {
        alt: 'creative enterprise', img: creativeEnterprise, imgHover: creativeEnterpriseHover, key: 3,
    },
    {
        alt: 'flutterwave', img: flutterwave, imgHover: flutterwaveHover, key: 4,
    },
    {
        alt: 'verified', img: verified, imgHover: verifiedHover, key: 5,
    },
    {
        alt: 'nedcom', img: nedcom, imgHover: nedcomHover, key: 6,
    },
];

export const PartnersLogos = () => (
    <div className="flex flex-row overflow-x-auto scrolling-touch items-center justify-between w-11/12" style={{margin:'auto'}}>
        {logos.map(({
            alt, img, key, imgHover,
        }) => (
            <Logos key={key} alt={alt} img={img} imgHover={imgHover} />
        ))}
    </div>
);
