import React from 'react';
import { Helmet } from 'react-helmet';
import { Properties } from '../../properties/components';
import { Helmet } from "react-helmet";

export const PropertiesPage = () => (
    <div>
        <Helmet>
            <title>Alt | Properties</title>
        </Helmet>
        <Properties />
    </div>
);
