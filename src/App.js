import React, { Component } from 'react';

import GlobalStyles from './styles/global';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Deu certo!</h1>
        <div className="App" />
      </div>
    );
  }
}

export default App;
