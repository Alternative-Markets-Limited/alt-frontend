import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import hero from '../../../assets/images/agreement-hero.png';
import { AgreeementForm } from './AgreeementForm';

export const Hero = () => {
    const { user: { firstname } } = useSelector(state => state.auth);
    return (
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="py-2 w-full md:w-5/12 lg:w-1/2">
                <h3 className="text-alt-blue font-bold text-2xl py-2 lg:text-4xl">{`Hi, ${firstname}`}</h3>
                <h4 className="text-black text-sm lg:text-base">Please agree to the Product Disclosure Statement</h4>
                <p className="text-xs py-2 mb-2 lg:text-sm">
                You should consider the
                    <a
                        href="https://res.cloudinary.com/altdotng/image/upload/v1587034817/alt_documents/ALT_pds_04-2020_xtu0r9.pdf"
                        className="underline hover:underline hover:text-alt-blue"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            &nbsp;PDS,&nbsp;
                    </a>
                     and our
                    <Link to="/" className="link"> Terms and Conditions </Link>
                before making any investment decisions.
                The advice provided in relation to ALTs is general advice only and has been prepared without taking into account your objectives,
                financial situation, and needs.
                </p>
                <div className="border mb-2 w-full opacity-25" />
                <AgreeementForm />
            </div>
            <img src={hero} alt="verification-hero" className="object-contain w-full h-full md:w-5/12" />
        </div>
    );
};
