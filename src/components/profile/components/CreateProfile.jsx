import React from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../layouts/components';
import { Spinner } from '../../common/components';
import { CreateProfileForm } from './CreateProfileForm';

export const CreateProfile = () => {
    const { loading } = useSelector(state => state.profile);
    return (
        <>
            <main className="mb-8">
                <section className="max-w-md mx-auto px-2">
                    <h3 className="mt-8 mb-4 text-xl font-semibold text-alt-blue lg:text-2xl">We would love to know more about you</h3>
                    <div className="bg-white rounded-md shadow-md p-4 border-t-4 border-alt-green">
                        <p className="text-xs font-medium my-2 text-black md:text-sm">Please enter your information below </p>
                        <div className={`${loading ? 'block' : 'hidden'}`}>
                            <Spinner />
                        </div>
                        <div className={`${loading ? 'hidden' : 'block'}`}>
                            <CreateProfileForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
