import { useEffect, useState } from 'react';
import { message } from 'antd';

import { getSinglePost } from '../contentful';

const useSinglePost = slug => {
    const [post, setPost] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let isSubscribed = true;
        const fetchSinglePost = async _slug => {
            try {
                const result = await getSinglePost(_slug);
                if (!result.length) {
                    setPost(null);
                    setLoading(false);
                    return;
                }
                if (isSubscribed) {
                    setPost(result[0].fields);
                    setLoading(false);
                }
            } catch (error) {
                message.error('Something went wrong, Please try again');
            }
        };
        fetchSinglePost(slug);
        // eslint-disable-next-line no-return-assign
        return () => isSubscribed = false;
    }, [slug]);

    return [post, isLoading];
};

export default useSinglePost;
