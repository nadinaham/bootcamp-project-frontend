import React from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'
import Recommend from '../../components/FilteredRecommended'

import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if(!token){
    history.push('/')
  }
  const content = (
    <>
      <Recommend/>
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