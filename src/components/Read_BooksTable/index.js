import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const Read_BooksTable = (props) => {
  if (props.data.read_bookByUser.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Read Books Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>User ID</Text></td>
                <td><Text>Book ID</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.read_bookByUser.map(read => (
            <BookItem key={read.id} userID={read.userID} bookID={read.bookID} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default Read_BooksTable
