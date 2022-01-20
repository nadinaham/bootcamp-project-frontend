import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiteHeader, NavItem, Nav } from './styles'
import { useHistory } from 'react-router-dom'

const NavComponent = ( input ) => {
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
  return(
    <>
      <SiteHeader>Bookify</SiteHeader>
      <Nav>
        <NavItem onClick = {() => goTo("home")}> <strong> Home </strong> </NavItem>
        <NavItem onClick = {() => goTo("read-books")}> <strong>My books</strong></NavItem>
        <NavItem onClick = {() => goTo("friend-rec")}> <strong>Recommendations</strong></NavItem>
        <NavItem onClick = {() => goTo("follows")}> <strong>Friends</strong></NavItem>
        <NavItem onClick = {() => alert("this page doesn't exist yet, sorry!")}> <strong>Account</strong></NavItem>
      </Nav>
    </>
  )
}

export default NavComponent
