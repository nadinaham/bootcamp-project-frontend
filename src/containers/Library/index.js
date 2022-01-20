import React, { useState } from 'react'
import CardComponent from '../../components/CardComponent'
import NavComponent from '../../components/NavComponent'

const Library = () => {
  return (
    <> 
      <NavComponent/>
        <CardComponent content = {content} />
    </>
  )
}

export default Library
