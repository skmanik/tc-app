import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import keys from './keys';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// check keys
console.log(keys.firebase);

// initialize firebase
firebase.initializeApp(keys.firebase);

const messaging = firebase.messaging();

messaging.requestPermission()
.then(function() {
	console.log('Have permission.');
})
.catch(function(err) {
	console.log('Error occurred.');
});