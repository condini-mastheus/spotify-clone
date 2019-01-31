import React, { Component } from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

export default class Browse extends Component {
  render() {
    return (
      <Container>
        <Title>Navegar</Title>
        <List>
          <Playlist href="#">
            <img
              src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
              alt="Img"
            />
            <strong>Os rocks tudo</strong>
            <p>As melhores do rock mundial</p>
          </Playlist>
        </List>
      </Container>
    );
  }
}
