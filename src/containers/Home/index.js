import React from 'react'
import Saved_Books from '../Saved_Books'
import Search from '../../components/Search v3'
import NavComponent from '../../components/NavComponent'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  let token = localStorage.getItem('token')
  if(!token){
      history.push('/login')
  }
  return (
    <> 
      <NavComponent />
      <Saved_Books />
    </>
  )
}

export default Home