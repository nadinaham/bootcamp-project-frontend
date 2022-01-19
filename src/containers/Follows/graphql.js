import gql from 'graphql-tag'

export const GET_FOLLOWS_BY_USER = gql`
 	query followsByFollower($followingUserID: String!) {
        followsByFollower(followingUserID: $followingUserID){
            id
            followingUserID
            followedUserID
        }  
    }
`