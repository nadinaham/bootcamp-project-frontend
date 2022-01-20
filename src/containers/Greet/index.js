import React from 'react'
import { useHistory } from 'react-router-dom'
import { Background, MainContainer, ButtonContainer, GreetHead, GreetDesc } from './styles'
import Button from '../../components/ButtonComponent'

const Greet = () => {
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
    return(
        <Background>
          <MainContainer>
            <GreetHead>Bookify</GreetHead>
            <GreetDesc></GreetDesc>
          </MainContainer>
          <ButtonContainer>
          <form
            onSubmit={e => {
              goTo('login')
            }}
          >
            <Button content = "Click Here to get started!"></Button>
          </form>
          </ButtonContainer>
        </Background>
    )

}

export default Greet

/*
  <div>Temporary, Andrew will handle later</div>
  <button onClick = {() => goTo("login")}>go to login</button>
  <button onClick = {() => goTo("register")}>go to register</button>
*/