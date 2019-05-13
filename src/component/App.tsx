import * as React from 'react';
import { Component } from 'react';
import '../assets/scss/app.css';
import Weather from '../containers/Weather';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
