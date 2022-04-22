import Link from 'next/link';
import Tag from './Tag';

import { githubIcon, linkIcon } from 'utils/svg';

import { ProductCardProps } from 'interfaces';

export default function ProductCard({
  title,
  description,
  tags,
  githubLink = '/',
  link = '/',
  isFeatured,
}: ProductCardProps) {
  return (
    <Link href="/projects">
      <a className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {!isFeatured && (
            <div className="flex items-center cursor-pointer">
              <Link href={link}>{linkIcon('#3aafca', 13, 13)}</Link>
              <Link href={githubLink}>
                <span className="pl-3">{githubIcon('#3aafca', 16, 16)}</span>
              </Link>
            </div>
          )}
        </div>

        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
        <div className="mt-4">
          {tags.map((tag) => {
            // @ts-ignore
            return <Tag key={tag.name} tag={tag} />;
          })}
        </div>
      </a>
    </Link>
  );
}
