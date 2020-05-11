import React from 'react';
import { Helmet } from 'react-helmet';
import { Posts } from '../../blog/components';

export const PostsPage = () => (
    <div>
        <Helmet>
            <title>Posts</title>
        </Helmet>
        <Posts />
    </div>
);

