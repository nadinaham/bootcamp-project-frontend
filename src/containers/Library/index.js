// LIBRARY: should contain books that you have already read, are currently reading, and will read (bookmarked)
// Also Apollo hooks should be fairly quick to implement

import React, { useState } from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'
import DeleteButtonComponent from '../../components/DeleteButtonComponent'

const Library = () => {
  // Load up library data from backend
  const [ library, setLibrary ] = useState('todo w/ apollo hooks')
  // Load up bookmarks data from backend
  const [ bookmarks, setBookmarks ] = useState('todo')
  // Load up currently reading data from backend
  const [ current, setCurrent] = useState('todo')

  // add books to library - TODO w/ apollo hooks

  // add books to bookmark - TODO w/ apollo hooks

  // add books to current reading - TODO w/ apollo hooks

  // remove ALL library books
  const handleLibraryClear = () => {
    const filtered = library.filter(book => {
      return !book
    })
    setLibrary(filtered)
  }
  // will remove ALL bookmarks
  const handleBookmarkClear = () => {
    const filtered = bookmarks.filter(book => {
      return !book
    })
    setBookmarks(filtered)
  }

  // will remove currently reading book
  const handleCurrentClear = () => {
    const filtered = current.filter(book => {
      return !book
    })
    setCurrent(filtered)
  }

  // will delete individual book from library
  const handleDelete = (id) => {
    const filtered = library.filter(book => {
      return book.id !== id
    })
    setLibrary(filtered)
  }

  // will delete individual book from bookmarks
  const handleBookmarkDelete = (id) => {
    const filtered = bookmarks.filter(book => {
      return book.id !== id
    })
    setBookmarks(filtered)
  }

  return (
      // content part to-do, for now the functions are implemented - will likely later implement BookList and Book components for each list and individual book
    <> 
      <NavComponent/>
        <CardComponent content = {content} />
    </>
  )
}

export default Library
