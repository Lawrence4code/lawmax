import Link from 'next/link';

import { BlogProps } from 'interfaces';

const BlogPost = ({ title, summary, slug }: BlogProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0"></p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
    </Link>
  );
};

export default BlogPost;
