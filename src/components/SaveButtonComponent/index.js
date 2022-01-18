import React from 'react'
import ButtonComponent from '../ButtonComponent'

const SaveButtonComponent = ({ book, handleAdd }) => {
  const handleClick = e => {
    e.preventDefault()
    console.log(e.currentTarget.id)
    handleAdd(e.currentTarget.id)
  }

  return (
    <ButtonComponent id={book.id} onClick={handleClick}>Save to Library</ButtonComponent>
  )
}

export default SaveButtonComponent
