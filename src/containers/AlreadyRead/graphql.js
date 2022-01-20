import gql from 'graphql-tag'

export const GET_READ_BOOKS_BY_USER = gql`
 	query read_bookByUser($userID: String!) {
        read_bookByUser(userID: $userID){
            id
            userID
            bookID  
            title
            author      
        }  
    }
`

export const ADD_TO_ALREADY_READ = gql`
 	mutation addBooktoRead($input: AddBookList!) {
        addBooktoRead(input: $input) {
            id
            userID
            bookID
            title
            author
        }
    }
`