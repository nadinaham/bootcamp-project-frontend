import React from 'react'
import CardComponent from '../../components/LoginCardComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { FlexContainer, Input } from '../Login/styles'

const Register = () => {
  const content = 
    <>
      <FlexContainer>
        <Input placeholder = "email"></Input>
      </FlexContainer>
      <FlexContainer>
        <Input placeholder = "password"></Input>
        <Input placeholder = "confirm password"></Input>
      </FlexContainer>
      <ButtonComponent content = "Submit!"/>
    </>;
  return(
    <> 
      <CardComponent content = {content} ></CardComponent>
    </>
  )
}

export default Register
