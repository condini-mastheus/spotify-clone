import React, { Component } from 'react';

import { Container, Search, User } from './styles';

export default class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Search>
          <input placeholder="Search" />
        </Search>

        <User>
          <img src="https://avatars3.githubusercontent.com/u/12428539?v=4" alt="condini-mastheus" />
          Matheus Condini
        </User>
      </Container>
    );
  }
}
