import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import ProjectCard from './../components/ProjectCard';

export default function Home({ projects }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-7xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Lawrence Dass
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Senior Associate - ReactJS at{' '}
            <span className="font-semibold">Publicis Sapient </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <section className="w-full  max-w-6xl mx-auto">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>

        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              logo={project.logo}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>

        <Link href="/projects">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            View all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <span className="h-16" />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-ap-south-1.graphcms.com/v2/cl21ya7e14cor01z40t7c2e91/master',
    cache: new InMemoryCache(),
  });

  // const data = await client.query({
  //   query: gql`
  //     query Projects {
  //       tags {
  //         id
  //         name
  //         projects {
  //           name
  //         }
  //       }
  //       projects {
  //         description
  //         id
  //         isFeatured
  //         name
  //         slug
  //         tags {
  //           id
  //           image
  //           name
  //         }
  //       }
  //     }
  //   `,
  // });

  const data = await client.query({
    query: gql`
      query Projects {
        projects {
          description
          id
          isFeatured
          title
          slug
          tags {
            id
            image
            name
            color
          }
        }
      }
    `,
  });

  const projects = data.data.projects;

  return {
    props: { projects },
  };
}
