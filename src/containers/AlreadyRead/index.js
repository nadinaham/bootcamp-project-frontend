import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_READ_BOOKS_BY_USER, ADD_TO_ALREADY_READ, DELETE_FROM_ALREADY_READ, REC_TO_FRIEND } from './graphql'
import AlreadyReadTable from '../../components/AlreadyReadTable'
import Search from '../../components/Search v3'

const AlreadyRead = () => {
  // set relevant states
  const [bookID, setBookID] = useState('')
  const [ID, setID] = useState('4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  // import data from backend - check order of this????
  const { loading, error, data: alreadyReadData } = useQuery(GET_READ_BOOKS_BY_USER, {
    variables: { userID: '4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050' },
  })

  // import mutations from backend
  const [handleAddAlready] = useMutation(ADD_TO_ALREADY_READ, {
    variables: { userID: '4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050', bookID: bookID, title: title, author: author },
    update: (client, { data: { handleAddAlready } }) => {
      try {
        const data = client.readQuery({ query: GET_READ_BOOKS_BY_USER })
        data.currentlyReadData = [...data.currentlyReadData, handleAddAlready]
        client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
      } catch (error) {
      // do nothing or display error state
      }
    },
  })

  if (loading) return "Loading..."
  if (error) return `Error: ${error}`

  console.log(alreadyReadData)
  console.log(ID)
  // const [handleDeleteAlready] = useMutation(ADD_FRIEND, {
  //   update: (client, { data: { addFriend } }) => {
  //   try {
  //     const data = client.readQuery({ query: GET_READ_BOOKS_BY_USER })
  
  // data.myFriends = [...data.myFriends, addFriend]
  
  //     client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
  //   } catch (error) {
  //     // do nothing or display error state
  //   }
  // }
  // })

  // const [handleRecToFriend] = useMutation(ADD_FRIEND, {
  //   update: (client, { data: { addFriend } }) => {
  //   try {
  //     const data = client.readQuery({ query: MY_FRIENDS })
  
  // data.myFriends = [...data.myFriends, addFriend]
  
  //     client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
  //   } catch (error) {
  //     // do nothing or display error state
  //   }
  // }
  // })
  // fix del/rec
  return (
    <Container>
      
      <Search handleAddAlready={handleAddAlready} header="Book Search" subHeader="Search for books by title or author!" desc="e.g. Harry Potter or Charles Dickens"/>
      <AlreadyReadTable 
        data={alreadyReadData} 
        handleAddAlready={handleAddAlready} 
        handleDeleteAlready={handleAddAlready} 
        handleRecToFriend={handleAddAlready} 
      />
    </Container>
  )
}

export default AlreadyRead
