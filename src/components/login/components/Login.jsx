import React from 'react';
import { useSelector } from 'react-redux';
import { MiniHeader, TextLink, Spinner } from '../../common/components';
import { LoginForm } from './LoginForm';

export const Login = () => {
    const { loading } = useSelector(state => state.auth);

    return (
        <main className="bg-image h-screen w-auto bg-cover bg-no-repeat bg-top">
            <div className="max-w-md mx-auto pt-20 px-2">
                <div className="bg-white rounded-md p-6">
                    <MiniHeader text="Welcome" span="Back" />
                    <div className={`${loading ? 'block' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <div className={`${loading ? 'hidden' : 'block'}`}>
                        <LoginForm />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center text-center">
                        <p className="mr-0 md:mr-2 text-xs">Don&apos;t have an account?</p>
                        <TextLink name="Create a Free Account" route="/register" className="font-bold text-alt-blue text-xs" />
                    </div>
                </div>
            </div>
        </main>
    );
};
