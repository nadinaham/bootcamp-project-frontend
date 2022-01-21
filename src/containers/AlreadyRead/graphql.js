import gql from 'graphql-tag'

export const GET_READ_BOOKS_BY_USER = gql`
 	query user_read_books($userID: ID!) {
    user_read_books(
      userID: $userID
    ) 
    {
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