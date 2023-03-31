import { request, publicRequest, upload } from '$lib/helpers/request';
import { print } from 'graphql';
import gql from 'graphql-tag';


export const query = {
    files: gql`
        query($userId: ID!){
            files(userId: $userId){
                id
                userId
                filename
                title
                url
                size
                contentType
                category
                courseId
                createdAt
                updatedAt
                deletedAt
            }
        }`,

    file: gql`
        query($id: ID!){
            file(id: $id){
                id
                url
                createdAt
                updatedAt
            }
        }`,

    create: gql`
        mutation($userId: ID!, $file: Upload!, $category: String!){
            createFile(input: {
                userId: $userId,
                file: $file,
                category:$category,
            }){
                id
                url
                path
                size
                contentType
                createdAt
            }
        }`,

    update: gql`
        mutation($data: Any){
            updateFile(data: $data){
                id
                updatedAt
            }
        }`,
}

export default {
    query: (path: string, variables: {}, data: any = null) => {
        if (data) {
            var formData = new FormData();
            const queryString = print(query[path])
            formData.append("operations", JSON.stringify({ query: queryString, variables }));
            formData.append("map", JSON.stringify({ "0": ["variables.file"] }));
            formData.append("0", data);
            return upload(path, formData)
        }
        const queryString = print(query[path])
        return request(path, queryString, variables)
    },

    queryPublic: (queryType: string, variables: object) => {
        const queryString = print(query[queryType])
        publicRequest(queryString, variables)
    }
}