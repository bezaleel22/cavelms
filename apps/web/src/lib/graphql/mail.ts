import { request, publicRequest } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    mails: gql`
        query($id: ID!){
            mails(id:$id){
                id
                createdAt
                updatedAt
            }
        }`,

    mail: gql`
        query($id: ID!){
            mail(id: $id){
                id
                createdAt
                updatedAt
            }
        }`,

    send: gql`
        mutation($tpl: String!, $to: [String!], $subject: String!, $attach: Boolean! $body: Any!){
            send(tpl:$tpl, input: {
                to:$to,
                subject:$subject,
                attach:$attach
                body:$body, 
            })
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