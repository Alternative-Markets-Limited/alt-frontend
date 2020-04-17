import React from 'react';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import success from '../../../assets/images/tick.svg';

export const OrderSuccessPage = () => (
    <>
        <main>
            <RedirectSection
                image={success}
                messageText="Your investment plan has been created successfully"
                actionText="You have successfully purchased alts."
                name="Go to dashboard"
                route="/dashboard"
            />
        </main>
        <Footer />
    </>
);
