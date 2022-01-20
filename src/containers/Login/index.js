import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import ButtonComponent from '../../components/ButtonComponent'
import LoginCardComponent from '../../components/LoginCardComponent'
import { FlexContainer, Input } from './styles'
import { LOGIN } from './graphql'


// test user email: Ross.Crist@Verla.ca password: password


const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
  })
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
        <Input placeholder="email" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FlexContainer>
      <FlexContainer>
        <Input placeholder="password" type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} />
      </FlexContainer>
      <button onClick={() => login()}>test</button>
      <ButtonComponent content="Submit!" onClick={() => login()} />
    </>
  )
  return (
    <>
      <LoginCardComponent content={content} />
    </>
  )
}

export default Login

// need a not registered? then make an account here thing -> steal from nav component
// prettify the button
// add text encouraging folks to sign in
