import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiteHeader, NavItem, Nav } from './styles'
import { useHistory } from 'react-router-dom'

const NavComponent = ( input ) => {
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
  const logout = () => {
    localStorage.clear()
    history.push('/')
  }
  return(
    <>
      <SiteHeader>Bookify</SiteHeader>
      <Nav>
        <NavItem onClick = {() => goTo("home")}> <strong> Home </strong> </NavItem>
        <NavItem onClick = {() => goTo("read-books")}> <strong>My Books</strong></NavItem>
        <NavItem onClick = {() => goTo("rec-books")}> <strong>Recommendations</strong></NavItem>
        <NavItem onClick = {() => goTo("follows")}> <strong>Friends</strong></NavItem>
        <NavItem onClick = {() => logout()}> <strong>Logout</strong></NavItem>
      </Nav>
    </>
  )
}

export default NavComponent
