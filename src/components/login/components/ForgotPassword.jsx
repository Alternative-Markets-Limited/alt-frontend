import React from 'react';
import { useSelector } from 'react-redux';
import { MiniHeader, TextLink, Spinner } from '../../common/components';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const ForgotPassword = () => {
    const { loading } = useSelector(state => state.auth);
    return (
        <main className="bg-image h-screen w-auto bg-cover bg-no-repeat bg-top">
            <div className="max-w-md mx-auto pt-40 px-2">
                <div className="bg-white rounded-md p-6">
                    <MiniHeader text="Reset" span="Password" />
                    <div className={`${loading ? 'block' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <div className={`${loading ? 'hidden' : 'block'}`}>
                        <ForgotPasswordForm />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center text-center">
                        <p className="mr-0 md:mr-2 text-xs">Already have an account?</p>
                        <TextLink name="Login" route="/login" className="font-bold text-alt-blue text-xs" />
                    </div>
                </div>
            </div>
        </main>
    );
};
