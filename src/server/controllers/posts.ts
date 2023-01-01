import { gql } from 'graphql-request';
import { request } from '../utils';

// Get All WP Posts
export const getWpPosts = async () => {
  try {
    const wpQuery = gql`
      {
        posts {
          edges {
            node {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(wpQuery);

    return [...result.posts.edges.map((post: any) => post.node)];
  } catch (e: any) {
    throw new Error(e);
  }
};

// Get Single WP Post
export const getWpPost = async (slug: string) => {
  try {
    const postQuery = gql`
      query WpPostQuery($slug: ID!) {
        post(idType: SLUG, id: $slug) {
          seo {
            title
            metaDesc
          }
          title
          slug
          content(format: RENDERED)
        }
      }
    `;

    const result = await request(postQuery, { slug });

    return result;
  } catch (e: any) {
    throw new Error(e);
  }
};
