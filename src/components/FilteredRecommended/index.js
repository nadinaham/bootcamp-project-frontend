import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Text, Container } from './styles'
import GET_USER_READ_BOOKS from './graphql'

const style = arr => {
  try {
    let sorted = ''
    for (let i = 0; i < arr.length - 1; i++) {
      sorted += arr[i] + ', '
    }
    sorted += arr[arr.length - 1]
    return sorted
  } catch (e) {
    return 'No Author'
  }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const Recommend = () => {
  const [result, setResult] = useState([])
  const [error, setError] = useState(false)

  const { loading, error: thisError, data } = useQuery(GET_USER_READ_BOOKS, {
    variables: { userID: '44200099-1227-4254-9f3a-8490789c8c35' },
  })

  useEffect(() => {
    if(data) {
        const allAuthorsString = data.user_read_books[getRandomInt(data.user_read_books.length)].author
        const allAuthorsArray = allAuthorsString.split(', ')
        const randAuthor = allAuthorsArray[getRandomInt(allAuthorsArray.length)]
        console.log(randAuthor)
        async function fetchBookList() {
          try {
            const response = await fetch(
              `https://www.googleapis.com/books/v1/volumes?q=inauthor:${randAuthor}`
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

  if (loading) {
    return 'Loading...'
  }

  if (thisError) {
    return 'Error'
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
            <tbody>
              <tr>
                <td>
                  <Text>Title</Text>
                </td>
                <td>
                  <Text>Authors</Text>
                </td>
              </tr>
              {filtered.map(item => (
                <tr>
                  <td>{item[0]}</td>
                  <td>{style(item[1])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </Container>
  )
}

export default Recommend
