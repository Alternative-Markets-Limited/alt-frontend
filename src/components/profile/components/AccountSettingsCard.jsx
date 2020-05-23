/* eslint-disable camelcase */
import React from 'react';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { EditProfileForm } from './EditProfileForm';
import { UploadAvatar } from './UploadAvatar';
import { Spinner } from '../../common/components';
import { BankAccountForm } from './BankAccountForm';
import { PasswordForm } from './PasswordForm';

const { TabPane } = Tabs;

export const AccountSettingsCard = () => {
    const { loading } = useSelector(state => state.profile);
    return (
        <div className="container px-2">
            <div className="max-w-4xl mx-auto bg-white rounded shadow-md py-8 px-4 -mt-20">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Basic Profile" key="1">
                        <div className={`${loading ? 'block' : 'hidden'}`}>
                            <Spinner />
                        </div>
                        <div className={`${loading ? 'hidden' : 'block'}`}>
                            <div className="flex flex-col-reverse w-full md:flex-row justify-between">
                                <div className="md:w-2/3"><EditProfileForm /></div>
                                <div className="md:w-1/4"><UploadAvatar /></div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Bank Account Details" key="2">
                        <BankAccountForm />
                    </TabPane>
                    <TabPane tab="Password Settings" key="3">
                        <PasswordForm />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};
