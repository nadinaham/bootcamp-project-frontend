import React from 'react'
import { Button } from './styles'

const ButtonComponent = (props) => {
  return (
    <>
      <Button onClick={props.onClick}>
        {props.title}
      </Button>
    </>
  )
}

export default ButtonComponent