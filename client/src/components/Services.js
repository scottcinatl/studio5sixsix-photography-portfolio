import React, { Component } from 'react'

import './Services.css'

class Services extends Component {
  render() {
    return (
      <div className="feature" id="services">
        <div className="service-flex">
          <div class="box1 left col">
            <hr />
            <h3>Landscapes</h3>
            <p>
              We make sure to take great patience when taking landscape pictures for our clients to achieve mastery by
              capturing the perfect imagery inside the frame.
            </p>
          </div>
          <div className="box2 left col">
            <hr />
            <h3>Portraits</h3>
            <p>
              Our goal when taking portraits is to create a moment that lasts beyond today. Portraits can be taken in
              the studio, on scene, or with a colorful backgrounds.
            </p>
          </div>
          <div className="box3 left col">
            <hr />
            <h3>Special Events</h3>
            <p>
              On that special day for your family or company, we provide full coverage of all events to capture the
              emotion and spirit of everyone who attends.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
