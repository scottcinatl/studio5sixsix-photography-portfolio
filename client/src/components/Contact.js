import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({ form: formState })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form)
    document.getElementById('submit').innerHTML = 'Message Submitted!'
  }

  render() {
    return (
      <div id="contact" className="contact-container">
        <h1 class="contact-title">CONTACT STUDIO5SIXSIX</h1>
        <form class="contact-form">
          <input
            id="i1"
            type="text"
            name="name"
            placeholder="NAME"
            required
            value={this.state.form.name}
            onChange={this.handleChange.bind(this)}
          />
          <input
            id="i2"
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            value={this.state.form.email}
            onChange={this.handleChange.bind(this)}
          />
          <textarea
            id="i3"
            type="text"
            name="message"
            placeholder="MESSAGE"
            required
            value={this.state.form.message}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)} id="submit">
            SEND
          </button>
        </form>
      </div>
    )
  }
}

export default Contact
