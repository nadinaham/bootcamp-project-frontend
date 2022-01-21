import React from 'react'
import { Text } from './styles'

const PersonItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.followedUserID}</Text></td>
    <td><Text>{prop.followingUserID}</Text></td>
  </tr>
  )
}

export default PersonItem