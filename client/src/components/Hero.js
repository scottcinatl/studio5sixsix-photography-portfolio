import React, { Component } from 'react'

import Canon from '../images/canon-300.png'

import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div>
        <section class="canon">
          <h2 className="canon-header">STUDIO5SIXSIX</h2>
          <p>PHOTOGRAPHY | SAN DIEGO</p>
          <img src={Canon} width="450px" />
        </section>
      </div>
    )
  }
}

export default Hero
