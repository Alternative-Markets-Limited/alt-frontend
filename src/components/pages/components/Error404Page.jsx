import React from 'react';
import { Helmet } from 'react-helmet';
import Error404 from '../../common/components/Error404';

export const Error404Page = () => (
    <div>
        <Helmet>
            <title>Error 404</title>
        </Helmet>
        <Error404 />
    </div>
);
