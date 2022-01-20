import React from 'react'
import BookCurrent from '../BookCurrent'
import ButtonComponent from '../ButtonComponent'

const Popup = ({ togglePop, book }) =>{

  const handleClick = () => {
    togglePop()
  }

  return (
    <>
      <ButtonComponent onClick={handleClick} content="Close" />
      <DislikeButtonComponent book={book.id} />
      <AddLibraryButtonComponent book={book.id} />
      <DeleteCurrentButtonComponent book={book.id} />
    </>
  )
}

export default Popup
