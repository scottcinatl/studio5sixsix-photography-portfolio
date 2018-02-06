import React, { Component } from 'react'

import { Navbar, NavItem } from 'react-materialize'

import './NavMenu.css'

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar brand="STUDIO566" right>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavMenu
