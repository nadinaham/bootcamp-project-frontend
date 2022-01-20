import React from 'react'
import { Button } from './styles'

const ButtonComponent = ({color, book, funct, title}) => {
  return (
    <>
      <Button id={book.id} onClick={funct}>
        {title}
      </Button>
    </>
  )
}

export default ButtonComponent