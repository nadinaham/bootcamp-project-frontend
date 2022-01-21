import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.colors.submit};
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  color: ${props => props.theme.colors.white}
  text-transform: uppercase;
  margin: 10px 0px;
  margin-left: 40%;
  margin-right: 40%;
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