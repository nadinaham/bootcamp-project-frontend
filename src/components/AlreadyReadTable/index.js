import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const AlreadyReadTable = props => {
  if (props.data.read_bookByUser.length === 0) {
    return (<Text>No Elements in Table</Text>)
  }
  return (
    <Container>
      <Text>Read Books Table!</Text>
      <table>
        <thead>
          <tr>
            <td><Text>User ID</Text></td>
            <td><Text>Book ID</Text></td>
            <td><Text>Title</Text></td>
            <td><Text>Author</Text></td>
          </tr>
        </thead>
        <tbody>
          {props.data.read_bookByUser.map(read => (
            <BookItem
              key={read.id}
              userID={read.userID}
              bookID={read.bookID}
              title={read.title}
              author={read.author}
            />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default AlreadyReadTable