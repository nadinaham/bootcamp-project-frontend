import React from 'react'
import { Button } from './styles'

const ButtonComponent = ({color, book, funct, title}) => {
  return (
    <>
      <Button>
        {title}
      </Button>
    </>
  )
}

export default ButtonComponent