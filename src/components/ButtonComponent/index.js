import React from 'react'
import { Button } from './styles'

const ButtonComponent = ({color, funct, book, title}) => {
  return (
    <>
      <Button onClick={funct}>
        {title}
      </Button>
    </>
  )
}

export default ButtonComponent