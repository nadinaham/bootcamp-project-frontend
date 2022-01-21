import gql from 'graphql-tag'

export const GET_USER_BY_EMAIL = gql`
 	query userByEmail($email: String!) {
        userByEmail(email: $email){
            id
            email
            firstName
            lastName
        }  
    }
`

export const ADD_FOLLOW = gql`
 	mutation addFollow($input: AddFollowPair!) {
     addFollow(input: $input){
        followedUserID
        followingUserID
     }
    }
`