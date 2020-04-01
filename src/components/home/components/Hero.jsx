import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonLink } from '../../common/components';
import hero from '../../../assets/images/hero.svg';

export const Hero = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    const buttons = [
        {
            key: 1,
            name: isAuthenticated ? 'Dashboard' : 'Get Started',
            primary: true,
            route: isAuthenticated ? '/dashboard' : '/register',
        },
        {
            key: 2,
            name: isAuthenticated ? 'My Assets' : 'Login',
            primary: false,
            route: isAuthenticated ? '/assets' : '/login',
        },
    ];

    return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="container p-2 md:pl-10 xl:pl-32">
                <div className="text-alt-blue font-bold text-2xl lg:text-4xl xl:text-5xl">
                    <h3 className="text-alt-blue">Enjoy</h3>
                    <h3 className="text-alt-green">Low-Capital</h3>
                    <h3 className="text-alt-blue">Access to High-Yield</h3>
                    <h3 className="text-alt-blue">Real Estate Assets.</h3>
                </div>
                <div className="flex flex-col md:flex-row md:w-4/5">
                    {buttons.map(({
                        name, primary, key, route,
                    }) => (
                        <ButtonLink key={key} name={name} primary={primary} className="my-1 md:mr-4" route={route} />
                    ))}
                </div>
            </div>
            <img src={hero} alt="hero" className="object-right-top object-contain w-full h-full md:w-1/2" />
        </div>
    );
};
