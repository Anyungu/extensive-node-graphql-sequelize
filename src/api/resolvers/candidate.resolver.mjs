import {
    createOneCandidate,
    getOneCandidate
} from '../services/candidate.service.mjs';


export var candidateResolvers = {
    Mutation: {
        createOneCandidate
    },
    Query: {
        getOneCandidate
    }
};