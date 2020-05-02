import React from 'react';
import { Helmet } from 'react-helmet';
import { AboutUs } from '../../aboutUs/components';
import { Helmet } from "react-helmet";

export const AboutUsPage = () => (
    <div>
        <Helmet>
            <title>About Us</title>
        </Helmet>
        <AboutUs />
    </div>
);
