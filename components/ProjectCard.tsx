import Image from 'next/image';

import Tag from './Tag';

import { ProjectCardProps } from 'interfaces';

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
      <Image
        className="w-full"
        height={project.image.height}
        width={project.image.width}
        src={project.image.url}
        alt="Mountain"
      />
      <div className="px-2 sm:px-6  py-2 sm:py-4">
        <div className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {project.title}
        </div>
        <p className="mt-1 text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag) => {
          // @ts-ignore
          return <Tag key={tag.name} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
