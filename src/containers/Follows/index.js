import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Container, Text } from './styles'
import { GET_FOLLOWS_BY_USER, GET_FOLLOWERS_BY_USER, GET_USER_BY_ID } from './graphql'
import FollowTable from '../../components/FollowTable'
import FollowTable2 from '../../components/FollowTable2'
import Search from '../../components/Search v1'
import UserSearch from '../../components/Search v2'
import NavComponent from '../../components/NavComponent'
import CardComponent from '../../components/CardComponent'

const FollowTableP1 = (prop) => {
  // Find people who follow user
  const { loading, error, data } = useQuery(GET_FOLLOWS_BY_USER, { variables: { followedUserID: prop.id } })
  if (loading) {
    return <Container><Text>Loading...</Text></Container>
  } if (error) {
    return <Container><Text>Error!</Text></Container>
  }
  return (
    <FollowTable data={data} />
  )
}


const FollowTableP2 = (prop) => {
  // Find people who user follows
  const { loading, error, data } = useQuery(GET_FOLLOWERS_BY_USER, { variables: { followingUserID: prop.id }})
  if (loading) {
    return <Container><Text>Loading...</Text></Container>
  } if (error) {
    return <Container><Text>Error!</Text></Container>
  }
  return (
    <FollowTable2 data={data} />
  )
}

const Follows = () => {
  const history = useHistory()
  let token = localStorage.getItem('token')
  if (!token) {
    history.push('/')
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
  }
  const ID = jwt_decode(token).id
  const content = (
      <>
        <UserSearch header="User Search" subHeader="Search for the email of other users!" desc="e.g. example@example.com" />
        
        <FollowTableP2 id={ID}/>
        <hr></hr>
        <FollowTableP1 id={ID}/>
      </>
  )
      /*
  const content1 = (
    <>
      <UserSearch header="User Search" subHeader="Search for the email of other users!" desc="e.g. example@example.com" />
      <FollowTableP2 id={ID}/>
    </>
  )
  const content2 = (
    <>
      <FollowTableP1 id={ID}/>
    </>
  )
  <CardComponent content={content2} />*/
  return (
    <>
      <NavComponent />
      <CardComponent content={content} />
      
    </>
  )
}

export default Follows
