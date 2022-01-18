import React, { useState } from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'
import DeleteButtonComponent from '../../components/DeleteButtonComponent'

const Library = () => {
  // Load up library data from backend
  const [ bookList, setBookList ] = useState(data)
  // Load up bookmarks data from backend
  const [ bookmarks, setBookmarks ] = useState(data)
  // For search function in library
  const [ searchInput, setInput ] = useState('')
  // For search function in bookmarked
  const [ searchBookmarks, setSearchBookmarks ] = useState('')

  // will remove all library books
  const handleLibraryClear = () => {
    const filtered = bookList.filter(book => {
      return !book
    })
    setBookList(filtered)
  }

  // will remove all bookmarks
  const handleBookmarkClear = () => {
    const filtered = bookmarks.filter(book => {
      return !book
    })
    setBookmarks(filtered)
  }

  // will add books to library
  const handleAdd = (userInput) => {
    let add = [...bookList]
    add = [...add, { id: uuidv4(), task: userInput, complete: false }]
    setBookList(add)
  }

  // will add books to bookmark
  const handleBookmark = (userInput) => {
    let add = [...bookmarks]
    add = [...add, {id: uuidv4(), task: userInput, complete: false }]
    setBookmarks(add)
  }

  // will delete individual book from library
  const handleDelete = (id) => {
    const filtered = bookList.filter(book => {
      return book.id !== id
    })
    setBookList(filtered)
  }

  // will delete individual book from bookmarks
  const handleBookmarkDelete = (id) => {
    const filtered = bookmarks.filter(book => {
      return book.id !== id
    })
    setBookmarks(filtered)
  }

  return (
    <> 
      <NavComponent/>
        <CardComponent content = {content} />
    </>
  )
}

export default Library