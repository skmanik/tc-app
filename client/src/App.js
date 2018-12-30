import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import keys from './keys';
import axios from 'axios';

class App extends Component {
  doTest() {
    console.log("Is this testing anything?");

    // check keys
    console.log(keys.firebase);

    // initialize firebase
    firebase.initializeApp(keys.firebase);

    const messaging = firebase.messaging();

    messaging.requestPermission()
    .then(function() {
      console.log('Have permission.');
      return messaging.getToken();
    })
    .then(function(token) {
      console.log('This is token: ', token);
      axios.post('testroute', {
        pushToken: token
      });
    })
    .catch(function(err) {
      console.log('Error occurred' + err);
    });

    messaging.onMessage(function(payload) {
      console.log('Message received', payload);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="#" onClick={this.doTest}>
            Click to Test
          </a>
        </header>
      </div>
    );
  }
}

export default App;