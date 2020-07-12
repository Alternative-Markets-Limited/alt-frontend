import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import logo from '../../../assets/images/logo.svg';
import '../../../css/sidebar.css';

export const Header = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    const [width, setWidth] = React.useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    return (
        <>
            {isAuthenticated || width < 769 ? <Sidebar pageWrapId="page-wrap" outerContainerId="App" /> : null}
            <header className="top-0 fixed w-full py-2 shadow-md bg-white md:px-8 z-40">
                <div className="px-2 container flex items-center justify-between">
                    <Link to="/"><img src={logo} alt="logo" className="w-12" /></Link>
                    {!isAuthenticated && width > 768 ? <Navbar /> : null}
                </div>
            </header>
        </>
    );
};
