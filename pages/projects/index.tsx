import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import ProductCard from 'components/ProjectCard';
import ProjectItem from 'components/ProjectItem';

const Project = ({ projects }) => {
  return (
    <>
      <p className="w-full max-w-7xl  mx-auto">
        Following are some of the application that I have worked on, over my
        experience as Software Developer.
      </p>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full max-w-7xl  mx-auto items-start ">
        {projects
          .filter((project) => project.isFeatured)
          .map((project) => {
            return <ProductCard key={project.title} project={project} />;
          })}
      </div>
      <section className="w-full  max-w-6xl mx-auto">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Other Portfolio Projects
        </h3>

        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4">
          {projects
            .filter((project) => !project.isFeatured)
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

        <span className="h-16" />
      </section>
    </>
  );
};

export default Project;

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
          image
          link
          githubLink
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
