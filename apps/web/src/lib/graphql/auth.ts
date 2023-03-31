import { request, publicRequest } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    signUp: gql`
        mutation($fullName: String! $email: String!, $password: String!, $role: String!){
            signUp(fullName:$fullName, email:$email, password:$password, role:$role){
                id
                email
                createdAt
                updatedAt
            }
        }`,

    signIn: gql`
        mutation($email: String!, $password: String!){
            signIn(email:$email, password:$password) { 
                id
                fullName
                role
                email
                avatarUrl
                token
                tokenExpiredAt
                progress
            }
        }`,

    signOut: gql`
        mutation{
            logOut{
                loggedIn
            }
        }`,
    verifyEmail: gql`
        mutation($id: ID!, $code: String!, $resend: Boolean!){
            verifyEmail(id:$id, code:$code, resend:$resend) { 
                id
                role
                email
                token
                tokenExpiredAt
                fullName
                progress
            }
        }`,

    refresh: gql`
        query{
            refresh{
                id
                fullName
                role
                email
                avatarUrl
                token
                tokenExpiredAt
                progress
            }
        }`,
}

const Auth = {
    query: (path: string, variables: object) => {
        const queryString = print(query[path])
        request(path, queryString, variables)
    },

    queryPublic: (path: string, variables: object) => {
        const queryString = print(query[path])
        return publicRequest(queryString, variables)
    }
}

export default Auth