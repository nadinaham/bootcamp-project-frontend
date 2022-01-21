import styled from 'styled-components'

export const Background = styled.body`
    background-color: ${props => props.theme.colors.llblue};
    width: 100%;
    height: 100vh;
    margin: 0;
    z-index: -1; `


export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  height: 80vh;
  padding-bottom: 5vh;
  width: 70%;
  margin-top: 30px;
  border-radius: 20px;
  border: 3px solid ${props => props.theme.colors.brown};
  background-color: ${props => props.theme.colors.main}
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 20px;
  text-align: center;
  z-index: 1;
`