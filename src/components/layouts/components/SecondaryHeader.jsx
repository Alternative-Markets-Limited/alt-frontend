import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

export const SecondaryHeader = () => {
    const history = useHistory();
    return (
        <div className="py-5 bg-alt-blue">
            <div className="container px-2">
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="text-white outline-none focus:outline-none hover:text-blue-500"
                >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" className="pr-2" />
                    Back
                </button>
            </div>

        </div>
    );
};
