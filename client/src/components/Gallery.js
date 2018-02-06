import React, { Component } from 'react'
import { MediaBox } from 'react-materialize'

import Car from '../images/car.JPG'
import Elephant from '../images/elephant.JPG'
import Gorilla from '../images/gorilla.JPG'
import Ocean from '../images/ocean.JPG'
import Tiger from '../images/tiger.JPG'
import Carmel from '../images/carmel.JPG'
import ImperialBeach from '../images/imperial-beach.JPG'
import CarmelBeach from '../images/carmel-beach.JPG'
import Trees from '../images/trees.JPG'

import './Gallery.css'

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container" id="gallery">
        <h3 className="gallery-header">GALLERY</h3>
        <div className="gallery-section">
          <div className="row">
            <div className="column">
              <MediaBox src={Car} caption="Car on Sunset Cliffs" width="650" />
              <MediaBox src={Elephant} caption="Elephant from San Diego Zoo" width="650" />
              <MediaBox src={Trees} caption="View from Sunset Cliffs" width="650" />
            </div>
            <div className="column">
              <MediaBox src={Carmel} caption="Carmel Beach" width="650" />
              <MediaBox src={ImperialBeach} caption="Imperial Beach" width="650" />
              <MediaBox src={CarmelBeach} caption="A Secret Place from Carmel Beach" width="650" />
            </div>
            <div className="column">
              <MediaBox src={Gorilla} caption="A Mother Gorilla Knows Best" width="650" />
              <MediaBox src={Ocean} caption="Unique Tress from 16 Mile Drive" width="650" />
              <MediaBox src={Tiger} caption="Double Trouble Tigers" width="650" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
