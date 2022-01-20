import React from 'react'
import CardComponent from '../../components/LoginCardComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { FlexContainer, Input } from '../Login/styles'

const Register = () => {
  const content = (
    <>
      <body>
        <p>
          <b>Register for Bookify - book recommendations that will change your life!</b>
        </p>
      </body>
      <FlexContainer>
        <Input placeholder="Email" />
      </FlexContainer>
      <FlexContainer>
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
      </FlexContainer>
      <div width="50%">
        <ButtonComponent content="Submit!" />
      </div>
    </>
  )
  return (
    <>
      <CardComponent content={content} />
    </>
  )
}

export default Register
