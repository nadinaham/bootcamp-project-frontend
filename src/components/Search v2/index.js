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


const UserSearch = props => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const [followedUserID, setID] = useState('')

  const [startUp, setStartUp] = useState(true)

  const token = localStorage.getItem('token')
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
          <Button content="Search" />
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
          <Button content="Search" />
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
        <Button content="Search" />
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
          </HeaderRow>
        </thead>
        <tbody>
          <tr>
            <td>{data.userByEmail.firstName}</td>
            <td>{data.userByEmail.lastName}</td>
            <td>
              <button
                type="submit"
                onClick={() => { setEverything(data.userByEmail.id); goTo('follows') }}
              >
                    Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default UserSearch
