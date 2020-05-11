import React from 'react';
import { Helmet } from 'react-helmet';
import { Transactions } from '../../dashboard/components';
import { BvnRoute } from '../../common/components';

export const TransactionsPage = () => (
    <div>
        <Helmet>
            <title>Transactions</title>
        </Helmet>
        <BvnRoute component={Transactions} />
    </div>
);
