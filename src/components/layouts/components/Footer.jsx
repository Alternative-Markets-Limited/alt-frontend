import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF, faLinkedin, faTwitter, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { TextLink } from '../../common/components';

const icons = [
    { icon: faFacebookF, key: 1, route: 'https://web.facebook.com/ALTNigeria' },
    { icon: faLinkedin, key: 2, route: 'https://www.linkedin.com/company/14625514' },
    { icon: faInstagram, key: 3, route: 'https://www.instagram.com/altdotng' },
    { icon: faTwitter, key: 4, route: 'https://twitter.com/altdotng' },
];
export const Footer = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    const links = [
        [
            { key: 1, name: 'About Us', route: '/about-us' },
            { key: 2, name: 'Blog', route: '/blog' },
            { key: 3, name: 'Properties', route: '/properties' },
        ],
        [
            {
                key: 1,
                name: 'Create Account',
                route: '/register',
            },
            {
                key: 2,
                name: 'Sign In',
                route: '/login',
            },
            {
                key: 3,
                name: 'Terms and Conditions',
                route: '/login',
            },
        ],
    ];

    return (
        <footer className="bg-alt-blue text-white">
            <div className="border mb-10 opacity-25" />
            <div className="container px-2 flex flex-col md:flex-row md:justify-between md:mb-5">
                <div className="md:w-1/3">
                    <p className="text-xs mb-4 md:text-sm">
                        Alternative Markets Limited is a Real estate tech start-up that provides Nigerians low
                        capital access to high yield real estate investment and return.
                    </p>
                    <h3 className="uppercase text-white font-bold text-xs md:mt-4">A fraction for everyone</h3>
                </div>

                <div className="flex flex-row justify-between my-8 md:my-0 md:justify-around md:items-start items-center w-full text-xs md:text-sm">
                    <div>
                        <h3 className="text-white font-bold mb-2 uppercase">Company</h3>
                        <ul className="my-2 md:mr-20 md:my-0">
                            {links[0].map(({ name, key, route }) => (
                                <TextLink name={name} key={key} route={route} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-2 uppercase">Quick Links</h3>
                        <ul className="my-2 md:my-0">
                            {(isAuthenticated ? links[1].slice(-1) : links[1]).map(({
                                name, key, route, href,
                            }) => (
                                <TextLink name={name} key={key} route={route} href={href} />
                            ))}
                            <li
                                className="my-1 list-none"
                            >
                                <a
                                    href="
                                    https://res.cloudinary.com/altdotng/image/upload/v1588770869/alt_documents/Alt.ng-_Privacy_Policy_bxhngh.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer hover:underline"
                                >
                                        Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-alt-blue-darker py-3 text-white">
                <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-row">
                        <p className="text-xs md:mr-8 md:text-sm">
                            Copyright
                            ©
                            {moment(new Date()).year()}
                        &nbsp;Alternative Markets Ltd, RC 1646450 All Rights Reserved &#124; &nbsp;
                            <a href="mailto:hello@alt.ng" className="cursor-pointer hover:underline text-xs md:text-sm">hello@alt.ng</a>
                        </p>

                    </div>
                    <div>
                        {icons.map(({ key, icon, route }) => (
                            <a key={key} href={route} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon size="sm" icon={icon} className="mr-8 mt-4 md:mt-0" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
