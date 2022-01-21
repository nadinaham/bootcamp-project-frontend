import gql from 'graphql-tag'

export const DELETE_FROM_SAVED = gql`
 	mutation deleteBookfromSaved($input: DeleteBookList!) {
        deleteBookfromSaved(
            input: $input
        ) 
    }
`
