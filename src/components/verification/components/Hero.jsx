import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import hero from '../../../assets/images/ver-hero.svg';
import { resendVerification } from '../actions';

export const Hero = () => {
    const { user } = useSelector(state => state.signUp);
    const { loading } = useSelector(state => state.verification);
    const dispatch = useDispatch();

    return !user ? <Redirect to="/register" /> : (
        <div className="container px-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="py-2 w-full md:w-5/12 lg:w-1/2">
                <h3 className="text-alt-blue font-bold text-2xl py-2 lg:text-4xl">
                    {`Welcome ${user.firstname}!`}
                </h3>
                <h4 className="text-black text-sm lg:text-base">Let&apos;s get you started! verify your email</h4>
                <p className="text-xs py-2 mb-2 lg:text-sm">
                        Check your inbox. If you don&apos;t find the verification email in your
                        inbox, Check your spam folder. Or click the button below
                        to resend the mail.
                </p>
                <Button
                    type="primary"
                    className="btn-primary mb-4 w-full md:w-2/3 lg:w-1/3"
                    onClick={() => dispatch(resendVerification(user.id))}
                    loading={loading}
                >
                        Resend Email
                </Button>
            </div>
            <img src={hero} alt="verification-hero" className="object-contain w-full h-full md:w-5/12" />
        </div>
    );
};
