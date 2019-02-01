import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import addPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      isLoading: PropTypes.bool,
    }).isRequired,
    getPlaylistsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;

    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <div className="wrap">
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
              <span>
                Playlists
                {playlists.isLoading && <Loading />}
              </span>
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
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

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
