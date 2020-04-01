import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_PAYSTACK_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECK}`,
    },
});
