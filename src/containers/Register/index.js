import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import CardComponent from '../../components/LoginCardComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { FlexContainer, Input } from '../Login/styles'
import { REGISTER } from './graphql'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirm] = useState('')
  const [errorMsg, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const [register, {loading, error}] = useMutation(REGISTER, {
    variables: {
      input: {
        firstName,
        lastName,
        email, 
        password: pass,
      }
    },
    onCompleted:({ register: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
    onError: () => {
      setError("Cannot Register! Email already Exists.")
    },
  })

  const content = (
    <>
      <body>
        <p>
          <b>Register for Bookify - Book recommendations that will change your life!</b>
        </p>
      </body>
      <FlexContainer>
        <Input placeholder="First Name" type="text" name="first name" value={firstName} onChange={e => {setFirstName(e.target.value); setError("")}}/>
        <Input placeholder="Last Name" type="text" name="last name" value={lastName} onChange={e => {setLastName(e.target.value); setError("")}}/>
      </FlexContainer>
      <FlexContainer>
        <Input placeholder="Email" type="text" name="email" value ={email} onChange ={e => {setEmail(e.target.value); setError("")}}/>
      </FlexContainer>
      <FlexContainer>
        <Input placeholder="Password" type="password" name="password" value={pass} onChange={e => {setPass(e.target.value); setError("")}}/>
        <Input placeholder="Confirm Password" type="password" name="confirm password" value={confirmPass} onChange={e => {setConfirm(e.target.value); setError("")}}/>
      </FlexContainer>
      <div width="50%">
        <ButtonComponent title="Submit!" onClick={function(){
          if(firstName === "")
          {
            setError("First name cannot be empty")
          } else if(lastName === "")
          {
            setError("Last name cannot be empty")
          } else if(email === "")
          {
            setError("Email cannot be empty")
          } else if (pass === "")
          {
            setError("Password cannot be empty")
          } else if (pass !== confirmPass)
          {
            setError("Password and Confirmation do not match")
          } else {
            register()
          }}}/>
        <p>{errorMsg}</p>
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
