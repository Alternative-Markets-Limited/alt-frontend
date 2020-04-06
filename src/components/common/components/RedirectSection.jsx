import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink } from './ButtonLink';

export const RedirectSection = ({
    image, messageText, actionText, route, name,
}) => (
    <div className="max-w-sm mx-auto px-2 flex flex-col items-center py-10 mt-20">
        <img src={image} alt="hero" className="object-contain w-1/3 h-1/3" />
        <div className="py-2 w-full text-center">
            <h4 className="text-black text-sm md:text-base">{messageText}</h4>
            <p className="text-xs py-2 mb-2 md:text-sm">{actionText}</p>
        </div>
        <ButtonLink primary route={route} name={name} />
    </div>
);

RedirectSection.propTypes = {
    actionText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};
