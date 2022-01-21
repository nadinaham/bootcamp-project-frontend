import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { Text } from './styles'
import { DELETE_FROM_ALREADY_READ } from './graphql'


const BookItem = prop => {
  const [bookID, setBook] = useState('')

  const [handleDeleteAlready, { loading: thisLoading, error: thisError }] = useMutation(DELETE_FROM_ALREADY_READ, {
    variables: {
      input: {
        userID: 'a4e7faf4-3d4b-4124-b221-b46fbe4ec119',
        bookID,
      },
    },
    onCompleted: data => console.log('done', data),
    onError: err => console.log('error ', err),
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
      <td><Text>{prop.userID}</Text></td>
      <td><Text>{prop.bookID}</Text></td>
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

export default BookItem
