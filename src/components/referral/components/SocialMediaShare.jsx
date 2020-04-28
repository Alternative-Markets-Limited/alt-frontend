import React from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';

const title = 'Register on Alt with my referral link';
const size = 32;

export const SocialMediaShare = ({ url }) => (
    <div className="flex flex-row justify-center my-4">
        <FacebookShareButton url={url} quote={title} className="mr-4">
            <FacebookIcon size={size} round />
        </FacebookShareButton>
        <TelegramShareButton url={url} title={title} className="mr-4">
            <TelegramIcon size={size} round />
        </TelegramShareButton>
        <TwitterShareButton url={url} title={title} className="mr-4">
            <TwitterIcon size={size} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={title} seperator=": ">
            <WhatsappIcon size={size} round />
        </WhatsappShareButton>
    </div>
);

SocialMediaShare.propTypes = {
    url: PropTypes.string.isRequired,
};
