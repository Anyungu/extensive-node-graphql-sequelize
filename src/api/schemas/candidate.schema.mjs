import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server-express');

export const candidateTypeDefs = gql`


    type Candidate {
        email: String!
        uid: Int!
        votePlus: Int!
        voteMinus: Int!
       
    }
    type CandidateMutationNotCommitted {
        code: Int!
        message: String!
    }
    type CandidateMutationCommitted {
        code: Int!
        message: String!
        data: Candidate!
    }


    union CandidateMutationResult = CandidateMutationCommitted | CandidateMutationNotCommitted


    extend type Mutation {

        createOneCandidate(email: String!): CandidateMutationResult!

    }




    type CandidateQueryNotFound {
        code: Int!
        message: String!
    }
    type CandidateQueryFound {
        code: Int!
        message: String!
        data: [Candidate]!   
    }


    union CandidateQueryResult = CandidateQueryFound | CandidateQueryNotFound


    extend type Query {
        getOneCandidate(email: String!): CandidateQueryResult!
       
    }
`;