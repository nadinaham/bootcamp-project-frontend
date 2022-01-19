import React from 'react'
import { Text } from './styles'

const BookItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.userID}</Text></td>
    <td><Text>{prop.bookID}</Text></td>
  </tr>
  )
}

export default BookItem
