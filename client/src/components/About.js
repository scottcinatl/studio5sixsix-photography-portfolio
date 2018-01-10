import React, { Component } from 'react'
import rico from '../rico.png'
import signature from '../signature.png'

class About extends Component {
  render() {
    return (
      <div id="about" class="about-container">
        <div class="about-section">
          <div class="about-left">
            <h1 class="about-title">ABOUT STUDIO5SIXSIX</h1>
            <p>
              Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever…
              It remembers little things, long after you have forgotten everything.
            </p>
            <p>
              If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s
              already a lot. The instrument is not the camera but the photographer.
            </p>
            <img className="signature" src={signature} alt="signature" />
          </div>

          <div class="about-right">
            <div className="mobile-profile">
              <img class="monique-profile" src={rico} alt="profile-picture" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
