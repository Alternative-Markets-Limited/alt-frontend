import React from 'react';
import { Footer } from '../../layouts/components';
import { ReferHeader } from './ReferHeader';
import { ReferCard } from './ReferCard';

export const Referral = () => (
    <>
        <main>
            <section className="pt-16">
                <ReferHeader />
            </section>
            <section className="mb-5">
                <ReferCard />
            </section>
        </main>
        <Footer />
    </>
);
