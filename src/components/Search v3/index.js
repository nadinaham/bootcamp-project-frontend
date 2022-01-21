import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { GET_READ_BOOKS_BY_USER, ADD_TO_ALREADY_READ } from '../../containers/AlreadyRead/graphql'
import jwt_decode from "jwt-decode"

import {
  TableHeader, HeaderRow, Container, Header, SubHeader, InputContainer,
} from './styles'
import Button from '../ButtonComponent'
import ButtonComponent from '../ButtonComponent'

const style = arr => {
  try {
    let sorted = ''
    for (let i = 0; i < arr.length - 1; i++) {
      sorted += `${arr[i]}, `
    }
    sorted += arr[arr.length - 1]
    return sorted
  } catch (e) {
    return 'No Author'
  }
}

const Search = props => {
  const [bookID, setBook] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const [result, setResult] = useState([])
  const [error, setError] = useState(false)

  const [startUp, setStartUp] = useState(false)

  const token = localStorage.getItem('token')
  const ID = jwt_decode(token).id


  useEffect(() => {
    async function fetchBookList() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&max-results=10`,
        )

        const json = await response.json()
        setResult(
          json.items.map(item => [item.volumeInfo.title, item.volumeInfo.authors, item.id]),
        )
      } catch (e) {
        setError(true)
      }
    }
    if (query !== '') {
      fetchBookList()
    }
  }, [query])

  const [handleAddAlready, { loading, error: thisError }] = useMutation(ADD_TO_ALREADY_READ, {
    variables: {
      input: {
        userID: ID,
        bookID,
        title,
        author,
      },
    },
    onCompleted: data => console.log('done', data),
    onError: err => console.log('error ', err),
    refetchQueries: () => [{ query: GET_READ_BOOKS_BY_USER, variables: {userID: ID} }],
    update: (client, { data: { handleAddAlready } }) => {
      try {
        const data = client.readQuery({ query: GET_READ_BOOKS_BY_USER })
        data.currentlyReadData = [...data.currentlyReadData, handleAddAlready]
        client.writeQuery({ query: GET_READ_BOOKS_BY_USER, data })
      } catch (e) {
        // do nothing or display error state
      }
    },
  })
  if (loading) return 'Loading...'
  if (thisError) return `Error: ${thisError}`

  const setEverything = async (tit, aut, boo) => {
    const promise1 = new Promise((resolve) => {
      setBook(boo)
      setTitle(tit)
      setAuthor(aut)
      resolve('test')
    })
    promise1.then((val) => {
      handleAddAlready()
    })
  }

  if (!startUp) {
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
            setError(false)
            setStartUp(true)
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
          setError(false)
        }}
      >
        <InputContainer>
          <input type="search" placeholder={props.desc} onChange={e => setSearch(e.target.value)} />
        </InputContainer>
        <ButtonComponent title="Search" />
      </form>

      {error === true ? (<h4>Bruh no books big sad very bad</h4>)
        : (
          <table>
            <thead>
              <HeaderRow>
                <th>
                  <TableHeader>Title</TableHeader>
                </th>
                <th>
                  <TableHeader>Authors</TableHeader>
                </th>
                <th>
                  <TableHeader>Already Read</TableHeader>
                </th>
              </HeaderRow>
            </thead>
            <tbody>
              {result.map(item => (
                <tr>
                  <td>{item[0]}</td>
                  <td><i>{style(item[1])}</i></td>
                  <td><ButtonComponent title="Add" onClick={() => { setEverything(item[0], style(item[1]), item[2]) }}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </Container>
  )
}

export default Search
