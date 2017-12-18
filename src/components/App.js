import React, { Component } from 'react';
import './App.css';


import Options from '../containers/options';
import Theme from '../containers/theme';

class App extends Component {
  render() {
    return (
     <div className="appContainer">
         <Options />
         <Theme />
     </div>
    );
  }
}

export default App;
