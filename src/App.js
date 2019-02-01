import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import GlobalStyles from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import store from './store';

import Routes from './routes';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <GlobalStyles />
            <Container>
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
