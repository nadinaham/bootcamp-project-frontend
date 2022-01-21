import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { Text } from './styles'
import { DELETE_FROM_SAVED } from './graphql'
import { GET_SAVED_BOOKS_BY_USER } from '../../containers/Saved_Books/graphql'
import jwt_decode from "jwt-decode"



const SavedBookItem = prop => {
  const [bookID, setBook] = useState('')
  let token = localStorage.getItem('token')
  if(!token){
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
  }
  const ID = jwt_decode(token).id

  const [handleDeleteAlready, { loading: thisLoading, error: thisError }] = useMutation(DELETE_FROM_SAVED, {
    variables: {
      input: {
        userID: ID,
        bookID,
      },
    },
    onCompleted: () => console.log("done"),
    onError: err => console.log('error ', err),
    refetchQueries: () => [{ query: GET_SAVED_BOOKS_BY_USER, variables: {userID: ID} }]
    
    
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
  if (thisLoading) return 'Loading...'
  if (thisError) return `Error: ${thisError}`

  const setEverything = async (boo) => {
    const promise1 = new Promise((resolve) => {
      setBook(boo)
      resolve('test')
    })
    promise1.then((val) => {
      handleDeleteAlready()
    })
  }


  return (
    <tr>
      <td><Text>{prop.title}</Text></td>
      <td><Text>{prop.author}</Text></td>
      <td>
        <button
          type="submit"
          onClick={() => { setEverything(prop.bookID) }}
        >
        Delete
        </button>
      </td>
    </tr>
  )
}

export default SavedBookItem
