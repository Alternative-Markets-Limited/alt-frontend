import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../css/navbar.css';

export const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    const defaultMenu = [
        {
            key: 1,
            name: 'Home',
            route: '/home',
        },
        {
            key: 2,
            name: 'Properties',
            route: '/properties',
        },
        {
            key: 3,
            name: 'Login',
            route: '/login',
        },
        {
            key: 4,
            name: 'Register',
            route: '/register',
        },
        {
            key: 5,
            name: 'About Us',
            route: '/about-us',
        },
        {
            key: 6,
            name: 'Blog',
            route: '/blog',
        },
    ];

    const authMenu = [
        {
            key: 1,
            name: 'Home',
            route: '/home',
        },
        {
            key: 2,
            name: 'Dashboard',
            route: '/dashboard',
        },
        {
            key: 3,
            name: 'My Assets',
            route: '/assets',
        },
        {
            key: 4,
            name: 'About Us',
            route: '/about-us',
        },
        {
            key: 5,
            name: 'Blog',
            route: '/blog',
        },
        {
            key: 6,
            name: 'Refer a Friend',
            route: '/refer',
        },
        {
            key: 7,
            name: 'Account Settings',
            route: '/account-settings',
        },
    ];

    return (
        <div className="flex space-x-1 mr-6">
            {isAuthenticated ? (authMenu.map(({ key, name, route }) => (
                <NavLink key={key} className="hover:underline" activeClassName="underline" to={route}>
                    {name}
                </NavLink>
            ))) : (defaultMenu.map(({ key, name, route }) => (
                <NavLink key={key} className="link" to={route}>
                    {name}
                </NavLink>
            )))}
        </div>
    );
};
