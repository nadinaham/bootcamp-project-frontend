import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const Saved_BooksTable = (props) => {
  if (props.data.savedByUser.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Saved Books Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>User ID</Text></td>
                <td><Text>Book ID</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.savedByUser.map(saved => (
            <BookItem key={saved.id} userID={saved.userID} bookID={saved.bookID} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default Saved_BooksTable
