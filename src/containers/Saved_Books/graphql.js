import gql from 'graphql-tag'

export const GET_SAVED_BOOKS_BY_USER = gql`
 	query savedByUser($userID: String!) {
        savedByUser(userID: $userID){
            id
            userID
            bookID    
            title
            author    
        }  
    }
`