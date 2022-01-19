import React, { useState, useEffect } from 'react'
import {TableHeader, HeaderRow, Container, Header, SubHeader, InputContainer } from './styles'
import Button from '../ButtonComponent'

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
          <div>
            <Header>Book Search</Header>
            <SubHeader>Search for books by title or author!</SubHeader>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault();
              setQuery(search);
              setError(false);
              setStartUp(true);
            }}
          >
            <InputContainer>
              <input type="text" placeholder = "e.g. Harry Potter or Charles Dickens" onChange={e => setSearch(e.target.value)} />
            </InputContainer>
            <Button content = "Search"></Button>
          </form>
           

        </Container>
      )} else {
      return (
      <Container>
          <div>
            <Header>Book Search</Header>
            <SubHeader>Search for books by title or author!</SubHeader>
          </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(search);
            setError(false);
          }}
        >
            <InputContainer>
              <input type="text" placeholder = "e.g. Harry Potter or Charles Dickens" onChange={e => setSearch(e.target.value)} />
            </InputContainer>
          <Button content = "Search"></Button>
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
            </HeaderRow>
          </thead>
          <tbody>
              {result.map(item => {
                return (<tr>
                  <td>{item[0]}</td>
                  <td><i>{style(item[1])}</i></td>
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
