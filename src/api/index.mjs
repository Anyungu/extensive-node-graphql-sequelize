import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server-express');


import { candidateTypeDefs as Candidate } from './schemas/candidate.schema.mjs';
import { candidateResolvers } from './resolvers/candidate.resolver.mjs';



const Root = gql`
        type Query {
            root: String
        }
        type Mutation {
            root: String
        }        
`


export const typeDefs =
    [Root, Candidate]



export const resolvers =
    [candidateResolvers]