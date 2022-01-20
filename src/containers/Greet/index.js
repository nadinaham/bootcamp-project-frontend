import React from 'react'
import { useHistory } from 'react-router-dom'
import { Background, MainContainer, ButtonContainer, GreetHead, GreetDesc, Input } from './styles'
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
            <GreetDesc>
              Welcome to <span>Bookify</span>! Your new home for book logging, recommendations and sharing with friends! 
              <br></br>
              <u>Features:</u>
              <ul>
                <li>
                  Search for books by author or title
                </li>
                <li>
                  Log books you've read or are looking to read
                </li>
                <li>
                  Recommend books to friends and see their recommendations for you
                </li>
                <li>
                  and more to come soon!
                </li>
              </ul>
            </GreetDesc>
          </MainContainer>
          <ButtonContainer>
          <form
            onSubmit={e => {
              goTo('login')
            }}
          >
            <Input type="submit" value="Click Here to get started!"></Input>
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