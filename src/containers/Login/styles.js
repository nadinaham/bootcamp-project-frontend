import styled from 'styled-components'


export const FlexContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
  padding: 0 10%;
    `

export const Input = styled.input`
  flex: 1;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.brown};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  font-size: 22px;
  padding: 5px 10px;`

export const Inputv2 = styled.input`
  background-color: ${props => props.theme.colors.submit};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => props.theme.colors.submithover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
    background-color: black;
  }
`

