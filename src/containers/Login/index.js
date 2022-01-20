import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent'
import CardComponent from '../../components/LoginCardComponent'
import { FlexContainer, Input } from './styles'


const Login = () => {
  const content = (
    <>
      <body>
        <p>
          <b>Got an account? Log in!</b>
        </p>
        <p>
          <b>No account? </b>
          <a href="/register">Register here!</a>
        </p>
      </body>
      <FlexContainer>
        <Input placeholder="Email" />
      </FlexContainer>
      <FlexContainer>
        <Input placeholder="Password" />
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

export default Login

// need a not registered? then make an account here thing -> steal from nav component
// prettify the button
// add text encouraging folks to sign in