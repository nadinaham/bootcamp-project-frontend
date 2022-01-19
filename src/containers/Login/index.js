import React, { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import LoginCardComponent from '../../components/LoginCardComponent'
import { FlexContainer, Input } from './styles'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'
import { useHistory } from 'react-router-dom'

// test user email: Ross.Crist@Verla.ca password: password

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, {loading, error}] = useMutation(LOGIN, {
    variables: {
      email, 
      password: pass,
    },
    onCompleted:({login: { token }}) => {
      localStorage.setItem('token', token)
      history.push('/home')
    }
  })
  const content = 
    <>
      <FlexContainer>
        <Input placeholder = "email" type="text" name="email" value ={email} onChange ={e => setEmail(e.target.value)}></Input>
      </FlexContainer>
      <FlexContainer>
        <Input placeholder = "password" type="password" name="pass" value ={pass} onChange ={e => setPass(e.target.value)}></Input>
      </FlexContainer>
      <button onClick = {() => login()}>test</button>
      <ButtonComponent content = "Submit!" onClick = {() => login()}/>
    </>;
  return(
    <> 
      <LoginCardComponent content = {content} ></LoginCardComponent>
    </>
  )

}

export default Login
