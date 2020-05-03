import React from 'react';
import { Helmet } from 'react-helmet';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import error from '../../../assets/images/close.svg';

export const OrderErrorPage = () => (
    <>
        <Helmet>
            <title>Order - Error</title>
        </Helmet>
        <main>
            <RedirectSection
                image={error}
                messageText="Something went wrong"
                actionText="We are unable to complete your order at this time"
                name="Go to Dashboard"
                route="/dashboard"
            />
        </main>
        <Footer />
    </>
);
