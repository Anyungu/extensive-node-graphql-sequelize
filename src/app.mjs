import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { ApolloServer } = require('apollo-server-express');
const express = require('express');

import { typeDefs } from './api/index.mjs';
import { resolvers } from './api/index.mjs';



const app = express();
const PORT = 9200;
const PATH = '/graphql'
const server = new ApolloServer({ typeDefs, resolvers });

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }))

server.applyMiddleware({ app, path: PATH });

app.listen({ port: process.env.PORT || PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);