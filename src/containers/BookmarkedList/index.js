import React from 'react'
import Book from '../Book'

const BookmarkedList = ({ bookmarks }) => {
  let filteredList = bookmarks.filter(entry => {
    return entry.task.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <>
      {filteredList.map(todo => {
        return (
          <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} handleDelete = {handleDelete}/>
        )
    })}
    </>
  )
}

export default BookmarkedList