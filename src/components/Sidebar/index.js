import React, { Component } from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import addPlaylistIcon from '../../assets/images/add_playlist.svg';

export default class Sidebar extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <div className="wrap">
          <Nav main>
            <li>
              <a href="">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados Recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Albúms</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            <li>
              <a href="">Playlist #1</a>
            </li>
            <li>
              <a href="">Playlist #2</a>
            </li>
          </Nav>
        </div>

        <NewPlaylist>
          <img src={addPlaylistIcon} alt="Nova Playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}
