import React from 'react';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { usePosts } from '../custom-hooks/index';
import { MiniHeader, Footer } from '../../layouts/components';
import { RecentPost } from './RecentPost';
import { BlogCard } from './BlogCard';
import { Quotes } from './Quotes';
import { Ads } from './Ads';
import { FollowUs } from './FollowUs';
import { Spinner } from '../../common/components';

export const Posts = () => {
    const [posts, isLoading] = usePosts();
    const [latestPost, ...otherPosts] = posts;

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <main>
                <section className="pt-16">
                    <MiniHeader searchBar name="Our Blog" icon={faBookReader} paddingBottom={20} />
                    <div className="container px-2">
                        <div className="bg-white rounded shadow text-sm px-2 py-6 max-w-lg mx-auto -mt-10 relative z-10">
                            <p className="text-center text-base text-alt-blue">The latest on happenings in real estate around the world </p>
                        </div>
                    </div>
                </section>
                <section>
                    {latestPost && <RecentPost post={latestPost} />}
                </section>
                <section className="my-10">
                    <div className="container px-2">
                        <div className="flex flex-col justify-between lg:flex-row w-full">
                            {!otherPosts.length ? <h3 className="text-center text-base md:text-xl text-black font-semibold">No posts found</h3> : (
                                <div className="content-start grid grid-cols-1 gap-12 md:grid-cols-2 g-justify-items-center lg:w-2/3">
                                    {otherPosts.map(({ sys, fields }) => (
                                        <BlogCard key={sys.id} sys={sys} fields={fields} />
                                    ))}
                                </div>
                            )}
                            <aside className="lg:w-1/4">
                                <div className="max-w-x relative z-0">
                                    <Quotes />
                                    <Ads />
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-around lg:flex-col lg:items-start">
                                        <FollowUs />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
