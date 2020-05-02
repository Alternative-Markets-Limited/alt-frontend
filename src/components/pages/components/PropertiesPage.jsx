import React from 'react';
import { Helmet } from 'react-helmet';
import { Properties } from '../../properties/components';

export const PropertiesPage = () => (
    <div>
        <Helmet>
            <title>Alt | Properties</title>
        </Helmet>
        <Properties />
    </div>
);
