import React from 'react';
import { useHistory } from 'react-router-dom';
import { Footer } from '../../layouts/components';
import error from '../../../assets/images/404.svg';

const Error404 = () => {
    const history = useHistory();

    return (
        <>
            <div className="max-w-sm mx-auto px-2 flex flex-col items-center py-10 mt-20">
                <img src={error} alt="error" className="object-contain w-1/3 h-1/3" />
                <div className="py-2 w-full text-center">
                    <h4 className="text-black text-sm md:text-base">404 Error</h4>
                    <p className="text-xs py-2 mb-2 md:text-sm">The page you are looking for could not be found</p>
                </div>
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="py-2 px-4 rounded text-center uppercase text-xs
                    w-full bg-alt-blue hover:bg-alt-blue-darker text-white hover:text-white"
                >
                        Go Back
                </button>
            </div>
            <Footer />
        </>
    );
};

export default Error404;
