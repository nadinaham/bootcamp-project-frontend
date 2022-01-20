import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { Text } from './styles'

const CurrentBookItem = (prop, {handleDeleteCurrent, handleAddAlready, handleDislike}) => {

  return (
    <tr>
      <td><Text>{prop.userID}</Text></td>
      <td><Text>{prop.bookID}</Text></td>
      <td><Text>{prop.title}</Text></td>
      <td><Text>{prop.author}</Text></td>
      <td><ButtonComponent color="pink" book={prop} funct={handleDeleteCurrent} title="Remove" /></td>
      <td><ButtonComponent color="blue" book={prop} funct={handleAddAlready} title="Finished" /></td>
      <td><ButtonComponent color="yellow" book={prop} funct={handleDislike} title="Dislike" /></td>
    </tr>
  )
}

export default CurrentBookItem
