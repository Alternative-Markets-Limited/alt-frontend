import { useEffect, useState } from 'react';
import { message } from 'antd';

import { getBlogPosts } from '../contentful';

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let isSubscribed = true;
        const getAllPosts = async () => {
            try {
                const blogPosts = await getBlogPosts();
                if (isSubscribed) {
                    setPosts(blogPosts);
                    setLoading(false);
                }
            } catch (error) {
                message.error('Something went wrong, Please try again');
            }
        };
        getAllPosts();
        // eslint-disable-next-line no-return-assign
        return () => isSubscribed = false;
    }, []);

    return [posts, isLoading];
};

export default usePosts;
