import React from 'react';
import { Helmet } from 'react-helmet';
import { CreateProfile } from '../../profile/components';

export const CreateProfilePage = () => (
    <div>
        <Helmet>
            <title>Create Profile</title>
        </Helmet>
        <CreateProfile />
    </div>
);
