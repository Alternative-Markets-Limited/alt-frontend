import React from 'react';
import { RedirectSection } from './RedirectSection';
import { Footer } from '../../layouts/components';
import error from '../../../assets/images/404.svg';

const Error404 = () => (
    <>
        <div>
            <RedirectSection
                actionText="The page you are looking for could not be found"
                messageText="404 Error"
                name="Go Home"
                route="/"
                image={error}
            />
        </div>
        <Footer />
    </>
);

export default Error404;
