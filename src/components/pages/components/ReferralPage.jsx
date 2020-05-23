import React from 'react';
import { Helmet } from 'react-helmet';
import { Referral } from '../../referral/components';
import { BvnRoute } from '../../common/components';

export const ReferralPage = () => (
    <div>
        <Helmet>
            <title>Referral</title>
        </Helmet>
        <BvnRoute component={Referral} />
    </div>
);
