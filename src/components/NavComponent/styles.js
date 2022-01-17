import styled from 'styled-components'


export const SiteHeader = styled.header`
  margin: 0;
  width: 100%;
  color: ${props => props.theme.colors.brown};
  background-color: ${props => props.theme.colors.header};
  text-align: center;
  font-size: 28px;
  padding: 10px 0px;
  font-weight: bolder;
  // possibly use a fancy font? e.g.  font-family: "Jazz LET" but this needs some setup;
    `

export const Nav = styled.nav`
  margin: 0;
  width: 100%;
  border-bottom: 5px solid ${props => props.theme.colors.brown} ;
  background-color: ${props => props.theme.colors.header};
  text-align: center;
  height: 4vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const NavItem = styled.div `
  flex: 1;
  background-color: inherit;
  transition: box-shadow 0.4s ease-out;
  text-shadow: 1px 1px 1px #aaa;
  font-size: 20px;
  color: ${props => props.theme.colors.brown};

  &:hover{
    box-shadow: 0px -6px ${props => props.theme.colors.brown} inset;
  }

`  
