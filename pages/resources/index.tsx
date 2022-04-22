import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Tag from 'components/Tag';
import Link from 'next/link';

import React from 'react';

const Resources = ({ categories }) => {
  const filteredCategory = categories.filter(
    (category) => category.categoryItems.length > 0
  );

  return (
    <div className=" w-9/12 mx-auto mb-16">
      {filteredCategory.map((category) => {
        return (
          <div
            key={category.name}
            className="border-b border-dashed border-grey-500 dark:border-stale-100 p-8"
          >
            <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
              {category.name}
            </h1>
            {category.categoryItems.map((categoryItem) => {
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
                      <div className="px-6 pt-4 pb-2">
                        {categoryItem.tags.map((tag) => {
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
      })}
    </div>
  );
};

export default Resources;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_DB_URI,
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query categoryData {
        categories {
          name
          categoryItems {
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
  });

  const categories = data.data.categories;

  return {
    props: {
      categories,
    },
  };
}
