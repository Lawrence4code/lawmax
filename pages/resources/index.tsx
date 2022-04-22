import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Tag from 'components/Tag';
import Link from 'next/link';

import React from 'react';

const Resources = ({ categories }) => {
  const filteredCategory = categories
    .filter((category) => category.categoryItems.length > 0)
    .sort((a, b) => b.categoryItems.length - a.categoryItems.length);

  return (
    <div className=" w-9/12 mx-auto mb-16">
      {filteredCategory.map((category) => {
        return (
          <div key={category.name} className=" p-8">
            <h1 className="w-fit font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white border-b-2 border-dashed border-blue-300 dark:border-blue-900">
              {category.name}
            </h1>
            {category.categoryItems.map((categoryItem) => {
              return (
                <div key={categoryItem.title}>
                  <a className="w-full">
                    <div className="w-full">
                      <div className="flex flex-row justify-between md:flex-row items-center">
                        <h4 className="w-fit mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                          {categoryItem.title}
                        </h4>
                        <div className="px-2 pt-4 pb-2">
                          {categoryItem.tags.map((tag) => {
                            return <Tag key={tag.name} tag={tag} />;
                          })}
                        </div>
                      </div>
                      {/* <p className="text-gray-600 dark:text-gray-400">
                        {categoryItem.description}
                      </p> */}
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
