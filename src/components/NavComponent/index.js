import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiteHeader, NavItem, Nav } from './styles'

const NavComponent = ( input ) => {
  return(
    <>
      <SiteHeader>Bookify</SiteHeader>
      <Nav>
        <NavItem> <strong> Home </strong> </NavItem>
        <NavItem> <strong>My books</strong></NavItem>
        <NavItem> <strong>Recommendations</strong></NavItem>
        <NavItem> <strong>Friends</strong></NavItem>
        <NavItem> <strong>My Account</strong></NavItem>
      </Nav>
    </>
  )
}

export default NavComponent
