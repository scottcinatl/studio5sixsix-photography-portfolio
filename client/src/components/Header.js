import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <a href="#" id="logo" />

        <nav>
          <a href="#" id="menu-icon" />

          <ul>
            <li>
              <a href="#" class="current">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
