import React from 'react';
import { Helmet } from 'react-helmet';
import { AccountSettings } from '../../profile/components';
import { BvnRoute } from '../../common/components';

export const AccountSettingsPage = () => (
    <div>
        <Helmet>
            <title>Account Settings</title>
        </Helmet>
        <BvnRoute component={AccountSettings} />
    </div>
);
