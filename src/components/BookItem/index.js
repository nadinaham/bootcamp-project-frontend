import React from 'react'
import { Text } from './styles'

const BookItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.userID}</Text></td>
    <td><Text>{prop.bookID}</Text></td>
    <td><Text>{prop.title}</Text></td>
    <td><Text>{prop.author}</Text></td>
  </tr>
  )
}

export default BookItem