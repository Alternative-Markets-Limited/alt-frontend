import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { RedirectSection } from '../../common/components';
import { Footer } from '../../layouts/components';
import errorImage from '../../../assets/images/close.svg';

export const OrderErrorPage = () => {
    const { error } = useSelector(state => state.property);
    return (
        <>
            <Helmet>
                <title>Order - Error</title>
            </Helmet>
            <main>
                <RedirectSection
                    image={errorImage}
                    messageText={error || 'Something went wrong'}
                    actionText="We are unable to complete your order at this time"
                    name="Go to Dashboard"
                    route="/dashboard"
                />
            </main>
            <Footer />
        </>
    );
};
