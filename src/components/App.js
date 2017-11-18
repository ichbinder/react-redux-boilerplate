import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>KNX Analyse</h1>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;
