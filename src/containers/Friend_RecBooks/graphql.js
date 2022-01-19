import gql from 'graphql-tag'

export const GET_FRIEND_BOOKS_BY_USER = gql`
 	query friend_recByReceiver($recipientID: String!) {
        friend_recByReceiver(recipientID: $recipientID){
            id
            senderID
            recipientID
            bookID
        }  
    }
`