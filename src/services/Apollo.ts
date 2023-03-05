import { ApolloClient, InMemoryCache } from '@apollo/client';

import Config from 'Config';

const GraphQLClient = new ApolloClient({
  uri: Config.api.baseUrl,
  cache: new InMemoryCache(),
});

export default GraphQLClient;
