import React from 'react';
import { SubHeader } from '../../layouts/components';

export const AboutUsHeader = () => (
    <div className="bg-alt-blue py-10">
        <div className="max-w-xs mx-auto px-2">
            <SubHeader name="About Us" textColor="text-white" />
            <p
                className="text-center text-white -mt-5"
            >
                We’re on a mission to revolutionize real estate investing by facilitating low capital Access to high yield assets
            </p>
        </div>
    </div>
);
