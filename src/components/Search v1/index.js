import React, { useState, useEffect } from 'react'
import {Text, Container} from './styles'

const style = (arr) => {
  try {
    let sorted = ""
    console.log(arr)
    for(let i = 0; i < arr.length - 1; i++)
    {
      sorted += arr[i] + ", "
    }
    sorted += arr[arr.length - 1]
    return sorted
  } catch(e) {
    return "No Author"
  }
}

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);

  const [startUp, setStartUp] = useState(false);

  useEffect(() => {
    async function fetchBookList() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&max-results=10`
        );

        const json = await response.json();
        setResult(
          json.items.map(item => {
            return [item.volumeInfo.title, item.volumeInfo.authors];
          })
        );
      } catch (e) {
        setError(true);
      }
    }
    if (query !== "") {
      fetchBookList();
    }
  }, [query]);

    if( !startUp ){
      return (
        <Container>
          <h2>Book Search :D</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              setQuery(search);
              setError(false);
              setStartUp(true);
            }}
          >
            <input type="text" onChange={e => setSearch(e.target.value)} />
            <input type="submit" value="Search" />
          </form>
        </Container>
      )} else {
      return (
      <Container>
        <h2>Book Search :D</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(search);
            setError(false);
          }}
        >
          <input type="text" onChange={e => setSearch(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
        
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
              {result.map(item => {
                return (<tr>
                  <td>{item[0]}</td>
                  <td>{style(item[1])}</td>
                </tr>)
              })}
          </tbody>
        </table>
        )}
      </Container>
    );
    }
  }

export default Search
