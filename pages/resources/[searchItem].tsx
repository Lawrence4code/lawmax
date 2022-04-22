import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Tag from 'components/Tag';
import { useRouter } from 'next/router';

const ResourceListing = ({ tags = [] }) => {
  const {
    query: { searchItem },
  } = useRouter();
  const categories = tags[0]?.tagItems || [];

  return (
    <div className="w-full max-w-7xl mx-auto mb-16">
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Results for "{searchItem}"
      </h1>
      {categories.map((categoryItem) => {
        return (
          <div key={categoryItem.title}>
            <a className="w-full">
              <div className="w-full mb-8">
                <div className="flex flex-col justify-between md:flex-row">
                  <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                    {categoryItem.title}
                  </h4>
                  <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0"></p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {categoryItem.description}
                </p>
                <div className="sm:px-6 sm:pt-4 sm:pb-2">
                  {categoryItem?.tags?.map((tag) => {
                    return <Tag key={tag.name} tag={tag} />;
                  })}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceListing;

export async function getStaticProps(context) {
  const {
    params: { searchItem },
  } = context;

  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_DB_URI,
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery($name: String) {
        tags(where: { name: $name }) {
          tagItems {
            ... on Project {
              id
              title
              description
              link
              tags {
                name
                color
              }
            }
            ... on Resource {
              description
              title
              tags {
                name
                color
              }
            }
          }
        }
      }
    `,
    variables: { name: searchItem },
  });

  const tags = data.data.tags;

  return { props: { tags: tags } };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_DB_URI,
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query MyQuery {
        categories {
          name
        }
        tags {
          name
        }
      }
    `,
  });

  const categories = data.data.categories;
  const tags = data.data.tags;
  const categoriesParams = categories.map((category) => {
    return { params: { searchItem: category.name } };
  });
  const tagsParams = tags.map((tags) => {
    return { params: { searchItem: tags.name } };
  });

  return {
    paths: [...categoriesParams, ...tagsParams],
    fallback: true, // false or 'blocking'
  };
}
