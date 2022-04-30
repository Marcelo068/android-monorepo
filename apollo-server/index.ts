const { ApolloServer, gql } = require('apollo-server');
import 'reflect-metadata';

import Schema from './src/schema'

const startApp = async () => {
  const server = new ApolloServer({
    cors: {
      origin: "*",
    },
    schema: await Schema,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

startApp()