import { useTheme } from 'next-themes';

import React from 'react';

const Tag = ({ tag }) => {
  const { resolvedTheme } = useTheme();

  return (
    <span
      className={`${
        resolvedTheme === 'light' ? 'bg-white' : 'bg-gray-900'
      } inline-block rounded-full text-white px-2 py-1 text-xs font-bold mr-3`}
      style={{ color: `${tag.color}` }}
    >
      {tag.name}
    </span>
  );
};

export default Tag;
