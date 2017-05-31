import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from 'semantic-ui-react'
import ChatApp from './components/ChatApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <ChatApp />
        </Container>
      </div>
    );
  }
}

export default App;
