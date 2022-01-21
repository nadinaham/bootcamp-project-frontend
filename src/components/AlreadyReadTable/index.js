import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const AlreadyReadTable = (props) => {
  if (props.data.user_read_books.length === 0) {
    return (<>
    <Text>Read Books Table!</Text>
    <Text>No Elements in Table</Text>
    </>)
  }
  return (
    <Container>
      <Text>Read Books Table!</Text>
      <table>
        <thead>
          <tr>
            <th><Text>Title</Text></th>
            <th><Text>Author</Text></th>
            <th><Text>Delete</Text></th>
          </tr>
        </thead>
        <tbody>
          {props.data.user_read_books.map(read => (
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
