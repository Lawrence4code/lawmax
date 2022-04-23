import { useRouter } from 'next/router';

import { TagProps } from 'interfaces';

const Tag = ({ tag }: TagProps) => {
  const router = useRouter();

  // link/a cannot be used in link/a, using handling routing programmatically
  const tagClickHandler = (tagName: String) => {
    router.push(`/resources/${tagName}`);
  };

  return (
    <div
      className="bg-inherit inline-block rounded-full text-sky-800 dark:text-sky-500 px-2 py-1 text-xs font-bold mr-3 mb-2 border border-grey-200 dark:border-gray-700 cursor-pointer"
      onClick={() => tagClickHandler(tag.name)}
    >
      #{`${tag.name}`}
    </div>
  );
};

export default Tag;
