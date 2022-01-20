import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import CardComponent from '../../components/LoginCardComponent'
import { FlexContainer, Input } from './styles'

const Login = () => {
  const content = (
    <>
      <FlexContainer>
        <Input placeholder = "email"></Input>
      </FlexContainer>
      <FlexContainer>
        <Input placeholder = "password"></Input>
      </FlexContainer>
      <div width="50%">
        <ButtonComponent content = "Submit!"/>
      </div>
    </>
  )

  return(
    <> 
      <CardComponent content = {content} ></CardComponent>
    </>
  )
}

export default Login

// need a not registered? then make an account here thing -> steal from nav component
// prettify the button
// add text encouraging folks to sign in