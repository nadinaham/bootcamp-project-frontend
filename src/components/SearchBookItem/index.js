// Applies for searchbar, adding recs from generator/friends

import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { Text } from './styles'

const SearchBookItem = (prop, { handleAddAlready, handleAddDisliked, handleAddBookmark }) => {

  return (
    <tr>
      <td><Text>{prop.userID}</Text></td>
      <td><Text>{prop.bookID}</Text></td>
      <td><Text>{prop.title}</Text></td>
      <td><Text>{prop.author}</Text></td>
      <td><ButtonComponent color="pink" book={prop} funct={handleAddAlready} title="Already Read" /></td>
      <td><ButtonComponent color="blue" book={prop} funct={handleAddDisliked} title="Dislike" /></td>
      <td><ButtonComponent color="yellow" book={prop} funct={handleAddBookmark} title="Bookmark" /></td>
    </tr>
  )
}

export default SearchBookItem
