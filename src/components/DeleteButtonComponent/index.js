import React from 'react'
import ButtonComponent from '../ButtonComponent'

const DeleteButtonComponent = ({ book, handleDelete }) => {
  const handleClick = e => {
    e.preventDefault()
    console.log(e.currentTarget.id)
    handleDelete(e.currentTarget.id)
  }

  return (
    <ButtonComponent id={book.id} onClick={handleClick}>Delete</ButtonComponent>
  )
}

export default DeleteButtonComponent
