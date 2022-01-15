import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiteHeader, NavItem, Nav } from './styles'

const NavComponent = ( input ) => {
    return(
    <>
        <SiteHeader>We need a name for this thing.exe</SiteHeader>
        <Nav>
            <NavItem> <strong> Home </strong> </NavItem>
            <NavItem> <strong>Temp item 1</strong></NavItem>
        </Nav>
    </>
    )
}

export default NavComponent
