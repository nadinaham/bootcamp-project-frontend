import gql from 'graphql-tag'

const GET_USER_READ_BOOKS = gql`
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

export default GET_USER_READ_BOOKS