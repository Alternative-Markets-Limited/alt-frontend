import React from 'react';
import PropTypes from 'prop-types';
import { SubHeader, Footer } from '../../layouts/components';
import { SideMenu } from './SideMenu';

export const MainLayout = ({ children, handleClick }) => (
    <>
        <main>
            <section className="pt-16">
                <div className="bg-alt-blue py-10">
                    <div className="max-w-xs mx-auto px-2">
                        <SubHeader name="Admin Dashboard" textColor="text-white" />
                    </div>
                </div>
            </section>
            <section className="container px-2 my-4 flex flex-row">
                <div className="">
                    <SideMenu handleClick={handleClick} />
                </div>
                <div className="w-3/4 ml-8">
                    {children}
                </div>
            </section>
        </main>
        <Footer />
    </>
);

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
};
