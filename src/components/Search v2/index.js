import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import {TableHeader, HeaderRow, Container, Header, SubHeader, InputContainer, Text } from './styles'
import { GET_USER_BY_EMAIL } from './graphql'
import Button from '../ButtonComponent'

const UserSearch = (props) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const {loading, error, data} = useQuery(GET_USER_BY_EMAIL, {
    variables: {email: query}})
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
    console.log(data)
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
                </tr>
          </tbody>
        </table>
        </Container>
      )} 

export default UserSearch
