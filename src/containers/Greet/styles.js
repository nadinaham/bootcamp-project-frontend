import styled from 'styled-components'
import img from '../../img/greetBackground.jpg'

export const Background = styled.div`
  background-image:url(${img});
  margin: 0;
  background-size:cover;
  background-position:center;
  height:100vh;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  gap: 5vh;
`

export const MainContainer = styled.div`
  height: 40vh;
  width: 50%;
  background-color: ${props => props.theme.colors.lblue};
  border: 1px solid ${props => props.theme.colors.lightheader};
  border-radius: 10px;
  `

export const GreetHead = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 1.5vh 0%;
  text-align: center;
  font-size: 36px;
  font-weight: bolder;
  color: ${props => props.theme.colors.brown};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  border-bottom: 1px solid ${props => props.theme.colors.brown};
  `

export const GreetDesc = styled.div`
  margin-top: 2vh;
  text-align: center;
  span{
    font-weight: bolder;
  }
  ul{
    list-style: none;
  }
  `

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  height: 10vh;
  width: 50%;
  form{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    button{
    width: 60%;
    }
  } 
  `