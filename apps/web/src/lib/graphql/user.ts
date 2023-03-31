import { request, publicRequest } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    users: gql`
        query{
            users{
                id       
                fullName
                email
                phone
                role
                avatarUrl
                program
                platform
                scholarshipReason
            }
        }`,

    user: gql`
        query($id: ID!){
            user(id: $id){
                id
                firstName
                lastName
                middleName
                fullName
                email
                phone
                avatarUrl
                dob
                gender
                address
                city
                state
                country
                zip
                nationality
                profession
                passwordSalt
                passwordHash
                role
                permissions
                username
                isVerified
                about
                wallet
                timeZone
                progress
                token
                tokenExpiredAt
                matricNumber
                platform
                program
                regNumber
                files
                salvationBrief
                godsWorkings
                reason
                churchName
                churchAddress
                pastorName
                pastorEmail
                pastorPhone
                churchInvolved
                healthConditions
                healthIssueDescription
                scholarship
                scholarshipReason
                createdAt
                updatedAt
                deletedAt
                confirmedAt
                confirmationMailSentAt
            }
        }`,

    update: gql`
        mutation($data: Any){
            updateUser(data: $data){
                id
                progress
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