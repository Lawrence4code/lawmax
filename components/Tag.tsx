import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import React from 'react';

const Tag = ({ tag }) => {
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const tagClickHandler = (tagName) => {
    router.push(`/resources/${tagName}`);
  };

  return (
    <div
      className="bg-inherit inline-block rounded-full text-white px-2 py-1 text-xs font-bold mr-3 border border-grey-200 dark:border-gray-800 cursor-pointer"
      style={{ color: `${tag.color}` }}
      onClick={() => tagClickHandler(tag.name)}
    >
      #{`${tag.name}`}
    </div>
  );
};

export default Tag;
