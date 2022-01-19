import React from 'react'
import { useHistory } from 'react-router-dom'

const Greet = () => {
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
    return(
        <>
            <div>Temporary, Andrew will handle later</div>
            <button onClick = {() => goTo("login")}>go to login</button>
            <button onClick = {() => goTo("register")}>go to register</button>
        </>

    )

}

export default Greet