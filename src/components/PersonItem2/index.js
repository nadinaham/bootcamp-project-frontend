import React from 'react'
import { Text } from './styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_BY_ID } from '../../containers/Follows/graphql'

const PersonItem = (prop) => {
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {variables: {id: prop.data.followedUserID}})
  if(loading)
  {
    return (
      <tr>
        <td><Text>Loading</Text></td>
        <td><Text>Loading</Text></td>
        <td><Text>Loading</Text></td>
        <td><Text>Loading</Text></td>
      </tr>
      )
  }
  if(error)
  {
    return (
      <tr>
        <td><Text>Error</Text></td>
        <td><Text>Error</Text></td>
        <td><Text>Error</Text></td>
        <td><Text>Error</Text></td>
      </tr>
      )
  }
  console.log(data.user)
  return (
  <tr>
    <td><Text>{data.user.firstName}</Text></td>
    <td><Text>{data.user.lastName}</Text></td>
    <td><Text>{data.user.email}</Text></td>
    <td><button>Hello!</button></td>
  </tr>
  )
}

export default PersonItem
