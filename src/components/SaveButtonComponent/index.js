import React from 'react'
import ButtonComponent from '../ButtonComponent'

const SaveButtonComponent = ({ book, handleSave, content }) => {
  const handleClick = e => {
    e.preventDefault()
    console.log(e.currentTarget.id)
    handleSave(e.currentTarget.id)
  }

  return (
    <ButtonComponent id={book.id} onClick={handleClick}>{content.content}</ButtonComponent>
  )
}

export default SaveButtonComponent
