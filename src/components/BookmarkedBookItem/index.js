import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { Text } from './styles'

const BookmarkedBookItem = (prop, { handleDeleteBookmark, handleDislike, handleAddCurrent }) => {

  // return (
  //   <tr>
  //     <td><Text>{prop.userID}</Text></td>
  //     <td><Text>{prop.bookID}</Text></td>
  //     <td><Text>{prop.title}</Text></td>
  //     <td><Text>{prop.author}</Text></td>
  //     <td><ButtonComponent color="pink" book={prop} funct={handleDeleteBookmark} title="Remove" /></td>
  //     <td><ButtonComponent color="yellow" book={prop} funct={handleDislike} title="Dislike" /></td>
  //     <td><ButtonComponent color="blue" book={prop} funct={handleAddCurrent} title="Now Reading" /></td>
  //   </tr>
  // )
  return (
    <>
      <Text>hi</Text>
    </>
  )
}

export default BookmarkedBookItem
