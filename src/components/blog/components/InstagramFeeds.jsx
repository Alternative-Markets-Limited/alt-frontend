import React from 'react';
import { Avatar } from 'antd';
import { Helmet } from 'react-helmet';
import logo from '../../../assets/images/logo.svg';

export const InstagramFeeds = () => (
    <div className="my-5">
        <Helmet>
            <script src="https://apps.elfsight.com/p/platform.js" defer />
        </Helmet>
        <div className="flex flex-row items-center my-5 lg:justify-start">
            <Avatar size={54} className="shadow p-3" src={logo} alt="Logo" />
            <p className="ml-4 font-bold text-alt-blue">Alternative Markets Limited</p>
        </div>
        <div className="relative z-0">
            <div className="elfsight-app-634326c3-96d8-403a-acbf-ae9e6b6d1078 absolute" style={{ zIndex: -1 }} />
            <div className="bg-white py-10 z-10 -mt-12 -mx-2" />
        </div>
    </div>
);
