import "dotenv/config";

export default {
  GRAPHQL_ENDPOINT: process.env.WP_GRAPHQL_ENDPOINT || '',
}
