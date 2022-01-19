// LIBRARY: should contain books that you have already read, are currently reading, and will read (bookmarked)
// Also Apollo hooks should be fairly quick to implement

import React, { useState } from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'

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

  // deletion also done on hooks

  // searching can be done on front end, will add that in a bit

  return (
      // content part to-do, for now the functions are implemented - will likely later implement BookList and Book components for each list and individual book
    <> 
      <NavComponent/>
        <CardComponent content = {content} />
    </>
  )
}

export default Library
