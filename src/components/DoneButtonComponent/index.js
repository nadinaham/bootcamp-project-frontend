import React, { useState } from 'react'
import Popup 
import ButtonComponent from '../ButtonComponent'

const DoneButtonComponent = () => {
  const [seen, setSeen] = useState(false)

  const togglePop = () => {
    setSeen(!seen)
  }

  return (
    <>
      <ButtonComponent onClick={togglePop} content="Finished" />
      <Popup state={seen} togglePop={togglePop} />
    </>
  )
}

export default DoneButtonComponent
