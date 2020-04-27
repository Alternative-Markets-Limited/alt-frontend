import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const { Paragraph } = Typography;
export const RecentPost = ({ post }) => {
    const {
        sys: { createdAt }, fields: {
            author, category, title, description, slug, featuredImage: { fields: { file: { url } } },
        },
    } = post;
    return (
        <div
            className="pt-20 pb-10 bg-alt-blue relative -mt-16 z-0 bg-no-repeat bg-cover"
            style={{
                background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${
                    url
                })`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'auto',
            }}
        >
            <div className="container px-2 text-white relative">
                <p className="text-white uppercase text-xs my-5">{category}</p>
                <h3 className="text-white text-3xl font-bold md:text-4xl">{title}</h3>
                <Paragraph ellipsis={{ rows: 3 }} className="text-white text-xs md:text-base my-5 max-w-2xl">
                    {description}
                </Paragraph>
                <p className="text-xs font-normal italic">{author}</p>
                <p className="text-xs font-normal italic">{moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
                <div className="mt-12">
                    <Link
                        to={`/blog/${slug}`}
                        className="py-2 px-4 rounded text-center uppercase text-xs
                        w-full bg-white hover:bg-gray-300 text-alt-blue hover:text-alt-blue-darker"
                    >
                    Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

RecentPost.propTypes = {
    post: PropTypes.shape({
        fields: PropTypes.shape().isRequired,
        sys: PropTypes.shape().isRequired,
    }).isRequired,
};
