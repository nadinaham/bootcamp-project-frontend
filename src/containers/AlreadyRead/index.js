import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import NavComponent from '../../components/NavComponent'
import CardComponent from '../../components/CardComponent'
import { GET_READ_BOOKS_BY_USER, ADD_TO_ALREADY_READ } from './graphql'
import AlreadyReadTable from '../../components/AlreadyReadTable'
import Search from '../../components/Search v3'
import { useHistory } from 'react-router-dom'
import jwt_decode from "jwt-decode"
import LoadingComponent from '../../components/LoadingComponent'


const AlreadyRead = () => {
    const history = useHistory()
    let token = localStorage.getItem('token')
    if(!token){
      history.push('/')
      token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
    }

  // set relevant states
  // const [bookID, setBookID] = useState('')
  const ID = jwt_decode(token).id
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // import data from backend - check order of this????
  const { loading, error , data } = useQuery(GET_READ_BOOKS_BY_USER, {
    variables: { userID: ID },
  })
  if(loading){
    return <LoadingComponent/>
  } else if(error){
    return <Text>Error!</Text>
  }
  // const [handleAddAlready, { loading, error }] = useMutation(ADD_TO_ALREADY_READ, {
  //   variables: {
  //     input: {
  //       userID: '4e50ba9f-9b4d-42f2-a8c0-e3d3c22c1050',
  //       bookID,
  //       title,
  //       author,
  //     },
  //   },
  //   onCompleted: data => console.log('done', data),
  //   onError: err => console.log('error ', err),
  //   update: (client, { data: { handleAddAlready } }) => {
  //     try {
  //       const data = client.readQuery({ query: GET_READ_BOOKS_BY_USER })
  //       data.currentlyReadData = [...data.currentlyReadData, handleAddAlready]
  //       client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
  //     } catch (error) {
  //       // do nothing or display error state
  //     }
  //   },
  // })
  // if (loading) return 'Loading...'
  // if (error) return `Error: ${error}`

  // if (queryLoading) return <LoadingComponent/>
  // if (queryError) return `Error: ${queryError}`
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
  const content = (
    <>
      <Search header="Book Search" subHeader="Search for books by title or author!" desc="e.g. Harry Potter or Charles Dickens" />
      <AlreadyReadTable
        data={data}
      />
    </>
  )
  const content2 = (
    <>
      <AlreadyReadTable
        data={data}
      />
    </>
  )


  return (
    <>
      <NavComponent/>
      <CardComponent content = {content} />
    </>
  )

}

export default AlreadyRead
