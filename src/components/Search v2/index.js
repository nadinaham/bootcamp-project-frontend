import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import {
  TableHeader, HeaderRow, Container, Header, SubHeader, InputContainer, Text,
} from './styles'
import { GET_USER_BY_EMAIL, ADD_FOLLOW } from './graphql'
import Button from '../ButtonComponent'
import { GET_FOLLOWERS_BY_USER } from '../../containers/Follows/graphql'
import ButtonComponent from '../ButtonComponent'


const UserSearch = props => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const [followedUserID, setID] = useState('')

  const [startUp, setStartUp] = useState(true)

  let token = localStorage.getItem('token')
  if(!token){
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
  }
  const followingUserID = String(jwt_decode(token).id)
  console.log(followingUserID)
  const history = useHistory()
  const goTo = string => {
    history.push('/'.concat(string))
  }

  const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, { variables: { email: query } })
  const [handleAddFollow, { loading: thisLoading, error: thisError }] = useMutation(ADD_FOLLOW, {
    variables: {
      input: {
        followedUserID,
        followingUserID,
      },
    },
    onCompleted: () => { console.log(followedUserID); console.log('done') },
    onError: err => { console.log(followedUserID); console.log('error ', err) },
    refetchQueries: () => [{ query: GET_FOLLOWERS_BY_USER, variables: { followingUserID: followingUserID } }],
    update: (client, { data: { handleAddAlready } }) => {
      try {
        const thisData = client.readQuery({ query: GET_FOLLOWERS_BY_USER })
        data.currentlyReadData = [...thisData.currentlyReadData, handleAddFollow]
        client.writeQuery({ query: GET_FOLLOWERS_BY_USER, thisData })
      } catch (e) {
        // do nothing or display error state
      }
    },
  })

  const setEverything = async boo => {
    const promise1 = new Promise(resolve => {
      setID(boo)
      resolve('test')
    })
    promise1.then(val => {
      handleAddFollow()
    })
  }

  if(startUp) {
    return (
      <Container>
        <div>
          <Header>{props.header}</Header>
          <SubHeader>{props.subHeader}</SubHeader>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault()
            setQuery(search)
            setStartUp(false)
          }}
        >
          <InputContainer>
            <input type="search" placeholder={props.desc} onChange={e => setSearch(e.target.value)} />
          </InputContainer>
          <Button title="Search" />
        </form>
      </Container>
    )
  }

  if (loading) {
    return <Container><Text>Loading...</Text></Container>
  } if (error && !startUp) {
    return (
      <Container>
        <div>
          <Header>{props.header}</Header>
          <SubHeader>{props.subHeader}</SubHeader>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault()
            setQuery(search)
          }}
        >
          <InputContainer>
            <input type="search" placeholder={props.desc} onChange={e => setSearch(e.target.value)} />
          </InputContainer>
          <Button title="Search" />
        </form>

        <Text>No Users Found</Text>

      </Container>
    )
  }
  return (
    <Container>
      <div>
        <Header>{props.header}</Header>
        <SubHeader>{props.subHeader}</SubHeader>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault()
          setQuery(search)
        }}
      >
        <InputContainer>
          <input type="search" placeholder={props.desc} onChange={e => setSearch(e.target.value)} />
        </InputContainer>
        <Button title="Search" />
      </form>

      <table>
        <thead>
          <HeaderRow>
            <th>
              <TableHeader>First Name</TableHeader>
            </th>
            <th>
              <TableHeader>Last Name</TableHeader>
            </th>
            <th>
              <TableHeader>Add</TableHeader>
            </th>
          </HeaderRow>
        </thead>
        <tbody>
          <tr>
            <td>{data.userByEmail.firstName}</td>
            <td>{data.userByEmail.lastName}</td>
            <td><ButtonComponent title="Add" onClick={() => { setEverything(data.userByEmail.id); goTo('follows') }}/>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default UserSearch
