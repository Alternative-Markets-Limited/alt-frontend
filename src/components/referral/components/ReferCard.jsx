/* eslint-disable camelcase */
import React from 'react';
import { Input, Button, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import { SocialMediaShare } from './SocialMediaShare';
import refer from '../../../assets/images/refer.svg';

export const ReferCard = () => {
    const { user: { referral_link } } = useSelector(state => state.auth);
    const onCopy = () => message.success('Copied to Clipboard');
    const styles = { color: 'black' };
    const tempUrl = referral_link;
    return (
        <div className="container px-2">
            <div className="max-w-4xl mx-auto bg-white rounded shadow-md py-8 px-4 -mt-20">
                <h3 className="text-center text-alt-blue text-base md:text-xl font-medium mb-4">
                    Refer 15 people or more and win
                    <span className="font-bold"> ₦10,000!</span>
                </h3>
                <div className="max-w-sm mx-auto mb-4">
                    <img src={refer} alt="refer" className="w-full h-full" />
                    <p className="mt-4 text-xs md:text-base text-gray-700 text-center">Enjoy great rewards from referrals</p>
                </div>
                <div className="flex flex-row justify-around md:px-10">
                    <Input className="input-form" style={styles} disabled value={tempUrl} />
                    <CopyToClipboard onCopy={onCopy} text={tempUrl}>
                        <Button type="primary" className="btn-primary ml-2">
                            <FontAwesomeIcon icon={faCopy} className="mr-1" size="sm" />
                                Copy
                        </Button>
                    </CopyToClipboard>
                </div>
                <p className="mt-4 text-xs md:text-base text-gray-700 text-center">You can also share the link via:</p>
                <SocialMediaShare url={tempUrl} />
            </div>
        </div>
    );
};
