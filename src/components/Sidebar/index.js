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
              <a href="#test">Navegar</a>
            </li>
            <li>
              <a href="#test">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#test">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#test">Tocados Recentemente</a>
            </li>
            <li>
              <a href="#test">Músicas</a>
            </li>
            <li>
              <a href="#test">Albúms</a>
            </li>
            <li>
              <a href="#test">Artistas</a>
            </li>
            <li>
              <a href="#test">Estações</a>
            </li>
            <li>
              <a href="#test">Arquivos locais</a>
            </li>
            <li>
              <a href="#test">Vídeos</a>
            </li>
            <li>
              <a href="#test">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            <li>
              <a href="#test">Playlist #1</a>
            </li>
            <li>
              <a href="#test">Playlist #2</a>
            </li>
          </Nav>
        </div>

        <NewPlaylist>
          <img src={addPlaylistIcon} alt="Nova Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}
