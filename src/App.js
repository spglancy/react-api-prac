/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // State holds values returned from server
    this.state = {
      about: null,
      message: null,
      range: 100,
      route: "forecast",
      inputValue: 100
    }
  }

  componentDidMount() {
    // Use Fetch to call API. The /test route returns a simple string
    // This call in componentDidMount will only be called once
    fetch('/about').then((res) => {
      // stream the response as JSON
      console.log(res.json())
      return res.json()
    }).then((json) => {
      console.log(json)
      const { about } = json // Get a value from JSON object
      this.setState({ about }) // Set a value on state with returned value
    }).catch((err) => {
      // Handle errors
      console.log(err.message)
    })

    // Let's call another API
    this.fetchMessage()
  }

  fetchMessage() {
    // Wrapping the API call in a function allow you to make calls to this
    // API as often as needed.
    
    // This calls a route and passes value in the query string. 
    fetch(`/${this.state.route}/?lat=${this.state.lat}&long=${this.state.long}`).then(res => res.json()).then((json) => {
      console.log(json)
      this.setState({
        message: json.value,
      })
    }).catch((err) => {
      console.log(err.message)
    })
  }

  renderMessage() {
    // Used to conditionally render data from server.
    // Returns null if message is null otherwise returns
    // a populated JSX element.
    const { message } = this.state
    if (message === null) {
      return undefined
    }

    return <h1>{message}</h1>
  }

  render() {
    const { about } = this.state

    return (
      <div className="App">
        <p>
          <strong>About:</strong>
          {about}
        </p>
        <div>{this.renderMessage()}</div>
        <p>
          <form onSubmit = {(e) => {
            e.preventDefault()
            this.fetchMessage()
          }}>
          <input value={this.state.lat} onChange={e => this.setState({ lat: e.target.value })} type="number" placeholder="latitude"/>
          <input value={this.state.long} onChange={e => this.setState({ long: e.target.value })} type="number" placeholder="longitude"/>          
          <button type="submit">Generate</button>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
