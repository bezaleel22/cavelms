import { request, publicRequest } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    referees: gql`
        query($userId: ID!){
            referees(userId:$userId){
                id       
                fullName
                email
                phone
                createdAt
                updatedAt
            }
        }`,

    referee: gql`
        query($id: ID!){
            referee(uersId: $id){
                id
                userId
                fullName
                email
                phone
                createdAt
                updatedAt
            }
        }`,

    create: gql`
        mutation($userId: ID!, $fullName: String!, $email: String!, $phone: String!){
            createReferee(input: {
                userId:$userId,
                fullName:$fullName,
                email:$email, 
                phone:$phone
            }){
                id
                createdAt
            }
        }`,

    update: gql`
        mutation($data: Any){
            updateReferee(data: $data){
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