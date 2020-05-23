import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography } from 'antd';
import { take, filter } from 'lodash';
import { useSelector } from 'react-redux';
import { Spinner } from '../../common/components';

const { Paragraph } = Typography;

export const Recent = () => {
    const { posts, loading } = useSelector(state => state.blog);
    const { slug } = useParams();

    if (loading) {
        return <Spinner />;
    }

    const renderPosts = () => (
        take(filter(posts, (({ fields }) => (fields.slug !== slug))), 3).map(({ fields, sys: { id } }) => (
            <div key={id} className="my-6">
                <h3 className="font-bold">{fields.title}</h3>
                <Paragraph ellipsis={{ rows: 3 }} className="text-gray-600 text-xs">
                    {fields.description}
                </Paragraph>
                <Link to={`/blog/${fields.slug}`} className="text-alt-blue hover:underline hover:text-alt-blue-darker">Read More</Link>
            </div>
        ))
    );

    return posts.length > 1 && (
        <div className="my-5">
            <p className="uppercase font-bold text-gray-900">Recent Posts</p>
            {renderPosts()}
        </div>
    );
};
