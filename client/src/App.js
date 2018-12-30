import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  doTest() {
    console.log("Is this testing anything?");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="#"
            onClick={this.doTest}
          >
            Click to Test
          </a>
        </header>
      </div>
    );
  }
}

export default App;