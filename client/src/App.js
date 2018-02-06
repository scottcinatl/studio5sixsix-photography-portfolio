import React, { Component } from 'react'
import './App.css'

import NavMenu from './components/NavMenu'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Interest from './components/Interest'
import Contact from './components/Contact'
import Footer from './components/Footer'

var apiUrl
if (process.env.NODE_ENV === 'production') {
  apiUrl = '/contacts'
} else {
  apiUrl = 'http://localhost:3000'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: apiUrl,
      newMessageSuccess: false,
    }
  }

  handleNewMessage(params) {
    fetch(`${this.state.apiUrl}/contacts`, {
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(rawResponse => {
        return rawResponse.json()
      })
      .then(parsedResponse => {
        if (parsedResponse.errors) {
          this.setState({ errors: parsedResponse.errors })
        } else {
          this.setState({
            user: parsedResponse.user,
            errors: null,
            newMesssageSuccess: true,
          })
        }
      })
  }

  render() {
    return (
      <div>
        <NavMenu />
        <Hero />
        <Services />
        <Gallery />
        <Interest />
        <Contact onSubmit={this.handleNewMessage.bind(this)} />
        <Footer />
      </div>
    )
  }
}

export default App
