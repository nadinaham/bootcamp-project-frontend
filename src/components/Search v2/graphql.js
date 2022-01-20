import gql from 'graphql-tag'

export const GET_USER_BY_EMAIL = gql`
 	query userByEmail($email: String!) {
        userByEmail(email: $email){
            id
            email
            firstName
            lastName
        }  
    }
`