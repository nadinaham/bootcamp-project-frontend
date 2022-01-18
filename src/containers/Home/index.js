import React from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'
import Search from '../../components/Search v1'

const Home = () => {
  const content = (
    <>
      <Search />
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