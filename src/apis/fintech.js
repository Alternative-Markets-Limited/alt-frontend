import axios from 'axios';

export const flutter = axios.create({
    baseURL: process.env.REACT_APP_FLUTTER_BASE_URL,
});

export const paystack = axios.create({
    baseURL: process.env.REACT_APP_PAYSTACK_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECK}`,
    },
});
