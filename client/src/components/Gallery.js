import React, { Component } from 'react'

import Car from '../car.JPG'
import Elephant from '../elephant.JPG'
import Carmel from '../featured-image.JPG'
import Gorilla from '../gorilla.JPG'
import Tiger from '../tiger.JPG'
import Ocean from '../ocean.JPG'

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="gallery-container">
        <h1 class="gallery-title">GALLERY</h1>
        <div className="gallery-section">
          <div>
            <img src={Car} alt="" />
          </div>
          <div>
            <img src={Ocean} alt="" />
          </div>
          <div>
            <img src={Tiger} alt="" />
          </div>
          <div>
            <img src={Gorilla} alt="" />
          </div>
          <div>
            <img src={Elephant} alt="" />
          </div>
          <div>
            <img src={Carmel} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
