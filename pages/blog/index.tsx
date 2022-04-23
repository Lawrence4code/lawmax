import { useState } from 'react';

import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';

import { allBlogs } from 'contentlayer/generated';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex flex-col items-start justify-center max-w-7xl mx-auto mb-16">
      <div className="w-full relative sm:w-2/5 ml-auto mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
      {filteredBlogPosts.map((post) => (
        <BlogPost key={post.title} {...post} />
      ))}
    </div>
  );
};

export function getStaticProps() {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { posts } };
}

export default Blog;
