import React from 'react';
import { Button } from 'antd';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export const About = ({
    about, video, location, showModal,
}) => (
    <div className="container px-2">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold flex flex-col my-3">
            <h3 className="my-1">About</h3>
            <div className="border border-alt-green w-12" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="w-full lg:w-3/5 ">
                <div>
                    <p className="text-base">{about}</p>
                    <p className="text base my-3">{`Location: ${location}`}</p>
                    <Button type="primary" className="btn-primary w-full md:max-w-sm lg:max-w-xs my-3" onClick={showModal}>Invest</Button>
                </div>
            </div>
            <div className="w-full relative pt-64 my-5 lg:w-1/3">
                {!video ? <h3>This property has no video</h3> : (
                    <ReactPlayer
                        className="absolute top-0 left-0"
                        width="100%"
                        height="100%"
                        controls
                        url={video}
                    />
                )}

            </div>
        </div>

    </div>
);

About.propTypes = {
    about: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    video: PropTypes.string,
};

About.defaultProps = {
    video: null,
};
