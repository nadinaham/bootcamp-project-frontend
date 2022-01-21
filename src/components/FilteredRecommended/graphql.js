import gql from 'graphql-tag'

export const GET_USER_READ_BOOKS = gql`
  query user_read_books($userID: ID!) {
    user_read_books(
      userID: $userID
    ) 
    {
      bookID
      title
      author
    }
  }
`

export const ADD_TO_SAVED = gql`
 	mutation addBooktoSaved($input: AddBookList!) {
    addBooktoSaved(input: $input) {
            id
            userID
            bookID
            title
            author
        }
    }
`