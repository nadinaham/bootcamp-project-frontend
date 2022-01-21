import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Container, Text } from './styles'
import CardComponent from '../../components/CardComponent'
import { GET_SAVED_BOOKS_BY_USER } from './graphql'
import Saved_BooksTable from '../../components/Saved_BooksTable'
import NavComponent from '../../components/NavComponent'


const Saved_Books = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if (!token) {
    history.push('/login')
  }
  const ID = jwt_decode(token).id
  const { loading, error, data } = useQuery(GET_SAVED_BOOKS_BY_USER, { variables: { userID: ID } })
  if (loading) {
    return <Container><Text>Loading...</Text></Container>
  } if (error) {
    return <Container><Text>Error!</Text></Container>
  }
  const content = (
    <>
      <Text>Saved Books:</Text>
      <Saved_BooksTable data={data} />
    </>
  )
  return (
    <>
      <CardComponent content = {content} />
    </>
  )
}

export default Saved_Books