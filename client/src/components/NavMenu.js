import React, { Component } from 'react'

import { Navbar, NavItem } from 'react-materialize'

import './NavMenu.css'

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar brand="STUDIO566" right>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Gallery</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavMenu
