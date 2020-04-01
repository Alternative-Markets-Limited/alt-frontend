import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import logo from '../../../assets/images/logo.svg';
import '../../../css/sidebar.css';

export const Header = () => (
    <>
        <Sidebar pageWrapId="page-wrap" outerContainerId="App" />
        <header className="top-0 sticky py-2 shadow-md bg-white md:px-8 z-40">
            <div className="px-2 container flex items-center justify-between">
                <Link to="/"><img src={logo} alt="logo" className="w-12" /></Link>
            </div>
        </header>
    </>
);
