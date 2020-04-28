import React from 'react';
import moment from 'moment';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { Recent } from './Recent';
import { options } from '../richTextOptions';

export const Post = ({ post }) => {
    const {
        fields: {
            author, body, category, title, description, date, slug, featuredImage: { fields: { file: { url } } },
        }, sys: { id },
    } = post;

    return (
        <>
            <div
                className="py-20 md:py-40 xl:py-64 bg-alt-blue bg-no-repeat bg-cover"
                style={{
                    background: `linear-gradient(rgba(20, 20, 20, .1),rgba(20, 20, 20, .1)),url(${
                        url
                    })`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 'auto',
                }}
            />
            <div className="container px-2 flex flex-col justify-between md:flex-row w-full">
                <div className="content-start grid grid-cols-1 lg:w-2/3">
                    <div className="my-5">
                        <p className="text-xs italic text-gray-600">
                            {`${category} · ${moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')} · ${author}`}
                        </p>
                        <h3 className="my-5 text-xl text-gray-900 font-bold">{title}</h3>
                        <p className="mt-2 mb-5 text-sm italic text-gray-700">{`"${description}"`}</p>
                        {documentToReactComponents(body, options)}
                    </div>
                </div>
                <aside className="md:w-full lg:w-1/4">
                    <Recent />
                </aside>
            </div>
            <div className="container px-2 my-5">
                <DiscussionEmbed
                    shortname="altdotng"
                    config={
                        {
                            identifier: id,
                            title,
                            url: `${process.env.REACT_APP_WEBSITE}/blog/${slug}`,
                        }
                    }
                />
            </div>
        </>
    );
};

Post.propTypes = {
    post: PropTypes.shape().isRequired,
};
