import React from 'react'
import { Button } from './styles'

const ButtonComponent = ({color, funct, title}) => {
  return (
    <>
      <Button onClick={funct}>
        {title}
      </Button>
    </>
  )
}

export default ButtonComponent