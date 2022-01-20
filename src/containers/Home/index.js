import React from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'
import Search from '../../components/Search v1'

import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if(!token){
    history.push('/')
  }
  const content = (
    <>
      <Search header="Book Search" subHeader="Search for books by title or author!" desc="e.g. Harry Potter or Charles Dickens"/>
    </>
  )

  return (
    <> 
      <NavComponent/>
        <CardComponent content = {content} />
    </>
  )
}

export default Home