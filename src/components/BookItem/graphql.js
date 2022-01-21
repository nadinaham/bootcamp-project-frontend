import gql from 'graphql-tag'

export const DELETE_FROM_ALREADY_READ = gql`
 	mutation deleteBookfromRead($input: DeleteBookList!) {
        deleteBookfromRead(
            input: $input
        ) 
    }
`
