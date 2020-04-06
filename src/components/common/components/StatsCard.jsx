/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { Spinner } from './Spinner';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const StatsCard = ({
    route, name, text, color, number, image,
}) => {
    const [props, set] = useSpring(() => ({ config: { friction: 40, mass: 5, tension: 350 }, xys: [0, 0, 1] }));
    const { loading } = useSelector(state => state.dashboard);
    return (
        <animated.div
            className="h-1/2 w-1/2 bg-white rounded-lg shadow-md overflow-hidden relative"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Link to={route}>
                <p className={`${color} text-white text-xs px-2 py-1`}>{name}</p>
                {loading ? <Spinner /> : <p className="text-center mb-1 p-3 text-3xl md:text-5xl text-alt-blue font-bold">{number}</p>}
                <p className="block -mt-3 pb-4 px-3 text-sm text-gray-700 font-normal text-center">{text}</p>
                <img src={image} alt="one" className="absolute right-0 bottom-0 w-3/4 -mb-2" />
            </Link>
        </animated.div>

    );
};

StatsCard.propTypes = {
    color: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

StatsCard.defaultProps = {
    color: 'bg-alt-green',
};

