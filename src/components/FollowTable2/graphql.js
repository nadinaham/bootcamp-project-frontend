import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
    query users {
        users {
                id
                firstName
                lastName
                email
        }  
}
` 
