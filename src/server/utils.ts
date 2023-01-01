import { request as OriginalRequest, Variables } from 'graphql-request';

import config from "../../config"

export const request = (query: string, variables?: Variables) => {
  return OriginalRequest(config.GRAPHQL_ENDPOINT, query, variables);
}
