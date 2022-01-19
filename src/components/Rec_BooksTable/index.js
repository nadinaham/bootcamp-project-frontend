import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const Rec_BooksTable = (props) => {
  if (props.data.rec_listByUser.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Recommended Books Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>User ID</Text></td>
                <td><Text>Book ID</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.rec_listByUser.map(rec => (
            <BookItem key={rec.id} userID={rec.userID} bookID={rec.bookID} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default Rec_BooksTable
