const client = require('contentful').createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
});

const getBlogPosts = async () => {
    try {
        const { items } = await client.getEntries();
        return items;
    } catch (error) {
        return error;
    }
};

const getSinglePost = async slug => {
    try {
        const { items } = await client.getEntries({
            content_type: 'title',
            'fields.slug': slug,
        });
        return items;
    } catch (error) {
        return error;
    }
};

export { getBlogPosts, getSinglePost };

