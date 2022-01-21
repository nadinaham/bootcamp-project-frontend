import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Text, Container } from './styles'
import { ADD_TO_SAVED } from './graphql'
import { GET_READ_BOOKS_BY_USER } from '../../containers/AlreadyRead/graphql'
import {GET_SAVED_BOOKS_BY_USER} from '../../containers/Saved_Books/graphql'
import LoadingComponent from '../LoadingComponent'

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

const getRandomInt = max => Math.floor(Math.random() * max)

let token = localStorage.getItem('token')
if(!token){
  token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
}
const ID = jwt_decode(token).id

const Recommend = () => {
  const [bookID, setBook] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const [result, setResult] = useState([])
  const [error, setError] = useState(false)

  const { loading, error: thisError, data } = useQuery(GET_READ_BOOKS_BY_USER, {
    variables: { userID: ID },
  })

  useEffect(() => {
    if (data && data.user_read_books.length > 0) {
      console.log(data.user_read_books)
      const allAuthorsString = data.user_read_books[getRandomInt(data.user_read_books.length)].author
      const allAuthorsArray = allAuthorsString.split(', ')
      const randAuthor = allAuthorsArray[getRandomInt(allAuthorsArray.length)]
      async function fetchBookList() {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=inauthor:${randAuthor}`,
          )
          const json = await response.json()
          setResult(
            json.items.map(item => [item.volumeInfo.title, item.volumeInfo.authors, item.id]),
          )
        } catch (e) {
          setError(true)
        }
      }
      fetchBookList()
    }
  }, [data])

  const [handleAddAlready, { loading: thisLoading, error: thisThisError }] = useMutation(ADD_TO_SAVED, {
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
    refetchQueries: () => [{ query: GET_SAVED_BOOKS_BY_USER, variables: {userID: ID} }],
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
  if (thisLoading) return 'Loading...'
  if (thisThisError) return `Error: ${thisThisError}`


  const setEverything = async (tit, aut, boo) => {
    const promise1 = new Promise(resolve => {
      setBook(boo)
      setTitle(tit)
      setAuthor(aut)
      resolve('test')
    })
    promise1.then(val => {
      handleAddAlready()
    })
  }

  if (loading) {
    return <LoadingComponent/>
  }

  if (thisError) {
    return 'Error'
  }

  if (data.user_read_books.length === 0) {
    return (<>
    <h2>Recommendation By Author</h2>
    <h3>Go Add Some Read Books!</h3>
    </>)
  }

  const a = []

  data.user_read_books.forEach(item => a.push(item.bookID))

  const filtered = result.filter(item => !a.includes(item[2]))

  return (
    <Container>
      <h2>Recommendation By Author</h2>
      {error === true ? (<h4>Bruh no books big sad very bad</h4>)
        : (
          <table>
            <thead>
              <tr>
                <td>
                  <Text>Title</Text>
                </td>
                <td>
                  <Text>Authors</Text>
                </td>
                <td>
                  <Text>Add to Saved</Text>
                </td>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr>
                  <td>{item[0]}</td>
                  <td>{style(item[1])}</td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => { setEverything(item[0], style(item[1]), item[2]) }}
                    >
                        Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </Container>
  )
}

export default Recommend
