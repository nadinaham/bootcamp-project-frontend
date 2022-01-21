import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {TableHeader, HeaderRow, Container, Header, SubHeader, InputContainer, Text } from './styles'
import { GET_USER_BY_EMAIL } from './graphql'
import Button from '../ButtonComponent'
import { GET_FOLLOWERS_BY_USER } from '../../containers/Follows/graphql'
import { ADD_FOLLOW } from './graphql'
import jwt_decode from "jwt-decode"
import { useHistory } from 'react-router-dom'



const UserSearch = (props) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [followedUserID, setID] = useState("");

  const token = localStorage.getItem('token')
  const ID = jwt_decode(token).id
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
  
  const {loading, error, data} = useQuery(GET_USER_BY_EMAIL, {
    variables: {email: query}})
    const [handleAddAlready, { loading: thisLoading, error: thisError }] = useMutation(ADD_FOLLOW, {
      variables: {
        input: {
          followedUserID,
          followingUserID: ID,
        },
      },
      onCompleted: () => {console.log(followedUserID); console.log("done")},
      onError: err => {console.log(followedUserID); console.log('error ', err)},
      refetchQueries: () => [{ query: GET_FOLLOWERS_BY_USER, variables: {userID: ID} }]
    })
  
    const setEverything = async (boo) => {
      const promise1 = new Promise((resolve) => {
        setID(boo)
        resolve('test')
      })
      promise1.then((val) => {
        handleAddAlready()
      })
    }

    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
      return (
        <Container>
          <div>
            <Header>{props.header}</Header>
            <SubHeader>{props.subHeader}</SubHeader>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              setQuery(search);
            }}
          >
            <InputContainer>
              <input type="search" placeholder = {props.desc} onChange={e => setSearch(e.target.value)} />
            </InputContainer>
            <Button content = "Search"></Button>
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
              e.preventDefault();
              setQuery(search);
            }}
          >
            <InputContainer>
              <input type="search" placeholder = {props.desc} onChange={e => setSearch(e.target.value)} />
            </InputContainer>
            <Button content = "Search"></Button>
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
                      onClick={() => { setEverything(data.userByEmail.id); goTo("follows"); }}
                    >
                    Add
                    </button>
                  </td>
                </tr>
          </tbody>
        </table>
        </Container>
      )} 

export default UserSearch