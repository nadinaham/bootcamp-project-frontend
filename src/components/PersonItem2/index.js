import React from 'react'
import { Text } from './styles'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USER_BY_ID } from '../../containers/Follows/graphql'
import { DELETE_FOLLOW } from './graphql'
import { GET_FOLLOWERS_BY_USER } from '../../containers/Follows/graphql'
import jwt_decode from 'jwt-decode'

const PersonItem = (prop) => {
  const token = localStorage.getItem('token')
  const ID = jwt_decode(token).id

  const [handleDeleteAlready, { loading: thisLoading, error: thisError }] = useMutation(DELETE_FOLLOW, {
    variables: {
      input: {
        followedUserID: prop.data.followedUserID,
        followingUserID: prop.data.followingUserID
      },
    },
    onCompleted: () => console.log("done"),
    onError: err => console.log('error ', err),
    refetchQueries: () => [{ query: GET_FOLLOWERS_BY_USER, variables: {followingUserID: ID} }]
    
    
    // update: (client, { data: { handleDeleteAlready } }) => {
    //   try {
    //     const data = client.readQuery({ query: GET_READ_BOOKS_BY_USER })
    //     data.currentlyReadData = [...data.currentlyReadData, handleDeleteAlready]
    //     client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
    //   } catch (e) {
    //     // do nothing or display error state
    //   }
    // },
  })


  const { loading, error, data } = useQuery(GET_USER_BY_ID, {variables: {id: prop.data.followedUserID}})
  if(thisLoading || loading)
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
  if(thisError || error)
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
    <td><button
          type="submit"
          onClick={() => { handleDeleteAlready() }}
        >
        Delete
        </button></td>
  </tr>
  )
}

export default PersonItem
