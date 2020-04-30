import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

export const Quotes = () => {
    const [index, setIndex] = useState(0);

    const quotes = [
        { id: 0, text: 'The purpose of our lives is to be happy.' },
        { id: 1, text: 'Life is what happens when you\'re busy making other plans' },
        { id: 2, text: 'Get busy living or get busy dying.' },
        { id: 3, text: 'You only live once, but if you do it right, once is enough.' },
    ];

    const transitions = useTransition(quotes[index], item => item.id, {
        config: config.molasses,
        enter: { opacity: 1 },
        from: { opacity: 0 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        const loop = setInterval(() => setIndex(state => (state + 1) % quotes.length), 3000);
        return () => clearInterval(loop);
    }, [quotes.length]);

    return (
        <div className="mt-8 mb-32 lg:mt-0">
            <h3 className="font-bold text-xl mb-3 text-gray-900 xl:text-2xl">Inspirational Quotes</h3>
            <div className="relative">
                {transitions.map(({ item, key, props }) => (
                    <animated.p className="absolute" key={key} style={props}>
                        {item.text}
                    </animated.p>
                ))}
            </div>
        </div>
    );
};
