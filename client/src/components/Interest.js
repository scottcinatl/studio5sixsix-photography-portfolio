import React, { Component } from 'react'

import Arrow from '../images/arrow.png'

import './Interest.css'

class Interest extends Component {
  render() {
    return (
      <div>
        <div className="interest">
          <div className="interest-flex">
            <div class="interest-box">
              <div className="interest-content">
                Interested in having our studio produce high quality photos for you? Then fill out the form below to get
                more details about our rates
              </div>
              <img className="arrow" src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Interest
