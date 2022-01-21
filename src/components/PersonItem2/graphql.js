import gql from 'graphql-tag'

export const DELETE_FOLLOW = gql`
    mutation deleteFollow($input: AddFollowPair!) {
        deleteFollow(input: $input)
}
` 
