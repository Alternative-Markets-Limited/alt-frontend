import React from 'react';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { MiniHeader, Footer, SecondaryHeader } from '../../layouts/components';
import { ButtonLink } from '../../common/components';

export const Returns = () => (
    <>
        <main>
            <section className="pt-16">
                <SecondaryHeader />
                <MiniHeader name="My Returns" icon={faWallet} />
            </section>
            <section className="flex flex-col items-center container px-2 my-8 ">
                <h3 className="font-bold text-xl text-center">You presently do not have any returns</h3>
                <p className="text-sm my-2 text-center">
                        You can start acquiring assets and earning substantial passive income right now.
                        Peak some of our high performing assets  below
                </p>
                <ButtonLink route="/properties" name="View Properties" className="my-5 max-w-xs" />
            </section>
        </main>
        <Footer />
    </>
);
