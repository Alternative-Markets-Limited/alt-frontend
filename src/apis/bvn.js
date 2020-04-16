import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_VERIFIED_NG_BASE_URL,
    headers: {
        'api-key': process.env.REACT_APP_VERIFIED_NG_API_KEY,
        userid: process.env.REACT_APP_VERIFIED_NG_USER_ID,
    },
});
