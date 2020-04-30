import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF, faTwitter, faInstagram
} from '@fortawesome/free-brands-svg-icons';

const icons = [
    { icon: faFacebookF, key: 1, route: 'https://web.facebook.com/ALTNigeria' },
    { icon: faInstagram, key: 2, route: 'https://www.instagram.com/altdotng' },
    { icon: faTwitter, key: 3, route: 'https://twitter.com/altdotng' },
];

export const FollowUs = () => (
    <div className="mb-5">
        <div className="mt-5">
            <h3 className="text-2xl text-gray-900 font-bold mb-1">Stay in the know</h3>
            <p className="text-alt-blue font-medium">Follow us on social media</p>
        </div>
        <div className="mt-2">
            {icons.map(({ key, icon, route }) => (
                <a key={key} href={route} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="lg" icon={icon} className="mr-8 mt-4 md:mt-0" />
                </a>
            ))}
        </div>
    </div>
);
