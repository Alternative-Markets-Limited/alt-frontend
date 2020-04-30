import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../common/components';
import { SecondaryHeader, Footer } from '../../layouts/components';
import { getPost, getPosts } from '../actions';
import { Post } from './Post';

export const SinglePost = () => {
    const { post, loading } = useSelector(state => state.blog);
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        dispatch(getPost(slug));
        dispatch(getPosts());
    }, [slug, dispatch]);

    if (loading) {
        return <Spinner />;
    }

    if (post === undefined) {
        return <Redirect to="/404" />;
    }

    return (
        <>
            <main>
                <section className="pt-16">
                    <SecondaryHeader />
                </section>
                <section>
                    {!post ? <Spinner /> : <Post post={post} />}
                </section>
            </main>
            <Footer />
        </>
    );
};

