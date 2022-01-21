import React from 'react'
import { Text } from './styles'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USER_BY_ID } from '../../containers/Follows/graphql'
import { DELETE_FOLLOW } from './graphql'
import { GET_FOLLOWERS_BY_USER } from '../../containers/Follows/graphql'
import jwt_decode from 'jwt-decode'
import ButtonComponent from '../ButtonComponent'

const PersonItem = (prop) => {
  let token = localStorage.getItem('token')
  if(!token){
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
  }
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
    <td><ButtonComponent title="Delete" onClick={() => { handleDeleteAlready() }}/></td>
  </tr>
  )
}

export default PersonItem
