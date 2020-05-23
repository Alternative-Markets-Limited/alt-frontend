import React from 'react';
import { Footer, SubHeader } from '../../layouts/components';
import { AccountSettingsCard } from './AccountSettingsCard';

export const AccountSettings = () => (
    <>
        <main>
            <section className="pt-16">
                <div className="bg-alt-blue pt-10 pb-20">
                    <div className="max-w-xs mx-auto px-2">
                        <SubHeader name="Account Settings" textColor="text-white" />
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <AccountSettingsCard />
            </section>
        </main>
        <Footer />
    </>
);
