import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import ProjectItem from '../components/ProjectItem';

const Home = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-start max-w-7xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl sm:text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Lawrence Dass
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Senior Associate - ReactJS at{' '}
            <span className="font-semibold"> So and So </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            MERN stack developer, currently living in Bangalore, India. I am
            passionate about web performance, accessibility and security. I
            liked to work in detail and in specific parts of the web application
            to enhance user experience. I am constantly learning and exploring
            new technologies which solve real-life problems and believe in
            taking that one extra step that makes our user’s life better.
          </p>
        </div>
      </div>
      <section className="w-full  max-w-6xl mx-auto">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>

        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4">
          {projects
            .filter((project) => project.isFeatured)
            .map((project) => (
              <ProjectItem
                key={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                isFeatured={project.isFeatured}
                githubLink={project.githubLink}
                link={project.link}
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
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_DB_URI,
    cache: new InMemoryCache(),
  });
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

export default Home;
