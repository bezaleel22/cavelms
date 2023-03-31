import { request, publicRequest } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    educations: gql`
        query($userId: ID!){
            educations(userId:$userId){
                id
                userId       
                degree
                institution
                graduationYear
                createdAt
                updatedAt
            }
        }`,

    education: gql`
        query($id: ID!){
            education(uersId: $id){
                id 
                userId      
                degree
                institution
                graduationYear
                createdAt
                updatedAt
            }
        }`,

    create: gql`
        mutation($userId: ID!, $degree: String!, $institution: String!, $graduationYear: String!){
            createEducation(input: {
                userId:$userId,
                degree:$degree,
                institution:$institution, 
                graduationYear:$graduationYear
            }){
                id
                createdAt
            }
        }`,

    update: gql`
        mutation($data: Any){
            updateEducation(data: $data){
                id
                updatedAt
            }
        }`,
}

export default {
    query: (path: string, variables: object) => {
        const queryString = print(query[path])
        return request(path, queryString, variables)
    },

    queryPublic: (queryType: string, variables: object) => {
        const queryString = print(query[queryType])
        publicRequest(queryString, variables)
    }
}