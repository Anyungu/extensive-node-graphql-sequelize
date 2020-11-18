import { Candidate } from '../models/index.mjs'

export async function createOneCandidate(email) {

    try {

        const candidate = await Candidate.create({ email })

        return {
            data: candidate,
            code: 200,
            __typename: "CandidateMutationCommitted",
            message: "Candidate Created Successfully"
        }

    } catch (err) {
        return {
            __typename: "CandidateMutationNotCommitted",
            code: 500,
            message: err.errmsgs
        }
    }



}


export async function deleteOneCandidate(email) {

}

export async function voteForCandidate(email) {

}


export async function getOneCandidate(email) {

    try {

        const candidate = await Candidate.findOne({ where: { email } });

        if (candidate) {

            return {
                data: candidate,
                code: 200,
                __typename: "CandidateQueryFound",
                message: "Candidate Found"
            }

        }

        return {
            message: "Candidate not Found",
            code: 404,
            __typename: "CandidateQueryNotFound",
        }

    } catch (err) {

        return {
            __typename: "CandidateQueryNotFound",
            code: 500,
            message: err.errmsgs
        }

    }
}

