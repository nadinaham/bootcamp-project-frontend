import React from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'

const Home = () => {
  const content = (
    <>
      <div>test</div>
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
