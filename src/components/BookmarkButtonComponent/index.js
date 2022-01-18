import React from 'react'
import ButtonComponent from '../ButtonComponent'

const BookmarkButtonComponent = ({ book, handleBookmark }) => {
  const handleClick = e => {
    e.preventDefault()
    console.log(e.currentTarget.id)
    handleBookmark(e.currentTarget.id)
  }

  return (
    <ButtonComponent id={book.id} onClick={handleClick}>Bookmark</ButtonComponent>
  )
}

export default BookmarkButtonComponent