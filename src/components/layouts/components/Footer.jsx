import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF, faGooglePlusG, faPinterestP, faTwitter, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import { TextLink } from '../../common/components';

const links = [
    [
        { key: 1, name: 'About Us', route: '/login' },
        { key: 2, name: 'Testimonials', route: '/login' },
        { key: 3, name: 'Blog', route: '/login' },
        { key: 4, name: 'Properties', route: '/properties' },
    ],
    [
        { key: 1, name: 'Create Account', route: '/register' },
        { key: 2, name: 'Sign In', route: '/login' },
        { key: 3, name: 'Affiliate Marketer Sign Up', route: '/login' },
        { key: 4, name: 'Trust Deed', route: '/login' },
        { key: 5, name: 'Terms and Conditions', route: '/login' },
        { key: 6, name: 'Privacy Policy', route: '/login' },
    ],
];

const icons = [
    { icon: faFacebookF, key: 1 },
    { icon: faGooglePlusG, key: 2 },
    { icon: faPinterestP, key: 3 },
    { icon: faTwitter, key: 4 },
    { icon: faInstagram, key: 5 },
];
export const Footer = () => (
    <footer>
        <div className="border mb-10 opacity-25" />
        <div className="container px-2 flex flex-col md:flex-row md:justify-between md:mt-20">
            <div className="md:w-1/3">
                <p className="text-xs text-black mb-4 md:text-sm">
                    ALT Consult is a Real estate tech start-up that provides Nigerians low
                    capital access to high yield real estate investment and return.
                </p>
                <h3 className="text-alt-blue uppercase font-bold text-xs md:mt-4">A fraction for everyone</h3>
                <Link to="/"><img src={logo} alt="logo" className="w-1/6 my-4" /></Link>
            </div>
            <div className="">
                <div className="flex flex-col md:flex-row w-full text-xs md:text-sm">
                    <div>
                        <h3 className="text-alt-blue font-bold mb-2 uppercase">Company</h3>
                        <ul className="my-2 md:mr-20 md:my-0">
                            {links[0].map(({ name, key, route }) => (
                                <TextLink name={name} key={key} route={route} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-alt-blue font-bold mb-2 uppercase">Quick Links</h3>
                        <ul className="my-2 md:my-0">
                            {links[1].map(({ name, key, route }) => (
                                <TextLink name={name} key={key} route={route} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-alt-blue py-3 text-white">
            <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-row">
                    <p className="text-xs md:mr-8 md:text-sm">
                        © 2019 Alternative Markets Limited Consult NG &#124; &nbsp;
                        <a href="mailto:hello@alt.ng" className="cursor-pointer hover:underline text-xs md:text-sm">hello@alt.ng</a>
                    </p>

                </div>
                <div>
                    {icons.map(({ key, icon }) => (
                        <a key={key} href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="sm" icon={icon} className="mr-8 mt-4 md:mt-0" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);
