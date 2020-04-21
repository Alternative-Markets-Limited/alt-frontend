import React from 'react';
import { Footer } from '../../layouts/components';
import { ReferHeader } from './ReferHeader';
import { ReferCard } from './ReferCard';
import { LeaderBoard } from './LeaderBoard';

export const Referral = () => (
    <>
        <main>
            <section className="pt-16">
                <ReferHeader />
            </section>
            <section>
                <ReferCard />
            </section>
            <section className="mt-10 mb-5">
                <LeaderBoard />
            </section>
        </main>
        <Footer />
    </>
);
