import gql from 'graphql-tag'

export const GET_REC_BOOKS_BY_USER = gql`
 	query rec_listByUser($userID: String!) {
        rec_listByUser(userID: $userID){
            id
            userID
            bookID      
            title
            author  
        }  
    }
`