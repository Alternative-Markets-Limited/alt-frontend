import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import PropTypes from 'prop-types';
import moment from 'moment';

const { Paragraph } = Typography;

export const BlogCard = ({ sys: { createdAt }, fields }) => {
    const {
        author, category, title, description, slug, featuredImage: { fields: { file: { url } } },
    } = fields;
    return (
        <div className="max-w-xl rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover bg-gray-200" src={url} alt={title} loading="lazy" width="320" />
            <div className="px-2 py-6">
                <div className="flex flex-row items-center justify-between my-2">
                    <span className="block px-3 py-1 text-xs text-white bg-orange-500 rounded">{category}</span>
                </div>
                <Link to={`/blog/${slug}`}>
                    <h3 className="uppercase font-semibold text-base my-3 text-alt-blue hover:underline">
                        {title}
                    </h3>
                </Link>
                <Paragraph ellipsis={{ rows: 3 }} className="text-gray-600 text-xs">
                    {description}
                </Paragraph>
                <div className="flex flex-row justify-between items-center my-4">
                    <Link to={`/blog/${slug}`} className="text-base font-medium text-gray-900 hover:text-alt-blue hover:underline">Read More...</Link>
                    <div className="flex flex-row items-center">
                        <FacebookShareButton url={`${process.env.REACT_APP_WEBSITE}/blog/${slug}`} quote={description}>
                            <FontAwesomeIcon className="pr-4 hover:text-blue-900" icon={faFacebookF} size="3x" />
                        </FacebookShareButton>
                        <TwitterShareButton url={`${process.env.REACT_APP_WEBSITE}/blog/${slug}`} title={title}>
                            <FontAwesomeIcon className="pr-4 hover:text-blue-500" icon={faTwitter} size="3x" />
                        </TwitterShareButton>
                    </div>
                </div>
                <div className="border mb-2 opacity-50" />
                <div className="flex flex-row justify-between items-center pt-4">
                    <p className="text-xs text-gray-600 font-normal">{`By ${author}`}</p>
                    <p className="text-xs text-gray-600">{moment(createdAt).format('dddd, MMMM Do YYYY')}</p>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    fields: PropTypes.shape().isRequired,
    sys: PropTypes.shape().isRequired,
};
