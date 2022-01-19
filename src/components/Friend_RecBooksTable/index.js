import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const Friend_RecBooksTable = (props) => {
  if (props.data.friend_recByReceiver.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Friend Recommendations Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>Sender ID</Text></td>
                <td><Text>Book ID</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.friend_recByReceiver.map(friendRec => (
            <BookItem key={friendRec.id} userID={friendRec.senderID} bookID={friendRec.bookID} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default Friend_RecBooksTable
