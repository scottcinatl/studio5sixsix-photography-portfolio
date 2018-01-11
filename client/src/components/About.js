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
              Hi there! I'm an amateur photographer living in San Diego, just taking photos for fun. I am an educator by
              day, an avid tv-watcher by night, and I would rather be in the company of puppies and kittens over that of
              humans.
            </p>
            <p>
              That's probably why you won't see many people in my photos. I prefer to capture the beauty of the world
              around us, and the creatures that inhabit it.
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
