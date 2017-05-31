import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from 'semantic-ui-react'
import ChatApp from './components/ChatApp'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
        <Container fluid>
          <NavBar />
          <ChatApp />
        </Container>
    );
  }
}

export default App;
