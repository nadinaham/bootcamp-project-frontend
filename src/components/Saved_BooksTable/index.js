import React from 'react'
import { Container, Text } from './styles'
import SavedBookItem from '../SavedBookItem'

const Saved_BooksTable = props => {
  if (props.data.savedByUser.length === 0) {
    return (<Text>No Elements in Table</Text>)
  }
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td><Text>Title</Text></td>
            <td><Text>Author</Text></td>
            <td><Text>Delete</Text></td>
          </tr>
        </thead>
        <tbody>
          {props.data.savedByUser.map(saved => (
            <SavedBookItem key={saved.id} userID={saved.userID} bookID={saved.bookID} title={saved.title} author={saved.author} />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Saved_BooksTable
