import React from 'react';
import { Helmet } from 'react-helmet';
import { Invoices } from '../../dashboard/components';
import { BvnRoute } from '../../common/components';

export const InvoicesPage = () => (
    <div>
        <Helmet>
            <title>Invoices</title>
        </Helmet>
        <BvnRoute component={Invoices} />
    </div>
);
