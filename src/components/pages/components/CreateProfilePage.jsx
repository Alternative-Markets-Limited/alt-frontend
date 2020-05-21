import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CreateProfile } from '../../profile/components';
import { Spinner } from '../../common/components';

export const CreateProfilePage = () => {
    const { user } = useSelector(state => state.auth);
    if (!user) return <Spinner />;
    return (
        <div>
            <Helmet>
                <title>Create Profile</title>
            </Helmet>
            {user.bvn ? <Redirect to="/dashboard" /> : <CreateProfile />}
        </div>
    );
};

