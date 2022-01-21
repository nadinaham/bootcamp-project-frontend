import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Container, Text } from './styles'
import CardComponent from '../../components/CardComponent'
import { GET_SAVED_BOOKS_BY_USER } from './graphql'
import Saved_BooksTable from '../../components/Saved_BooksTable'
import NavComponent from '../../components/NavComponent'
import Search from '../../components/Search v3'
import LoadingComponent from '../../components/LoadingComponent'


const Saved_Books = () => {
  const history = useHistory()
  let token = localStorage.getItem('token')
  if (!token) {
    history.push('/')
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
  }
  const ID = jwt_decode(token).id
  const { loading, error, data } = useQuery(GET_SAVED_BOOKS_BY_USER, { variables: { userID: ID } })
  if (loading) {
    return <LoadingComponent/>
  } if (error) {
    return <Container><Text>Error!</Text></Container>
  }
  const content = (
    <>
      <Search header="Book Search" subHeader="What Books have you Read?" desc="e.g. Harry Potter or Charles Dickens" />
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