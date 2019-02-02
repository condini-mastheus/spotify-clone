import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

import {
  Container, Header, Medias, Media,
} from './styles';

import clockIcon from '../../assets/images/clock.svg';
import plusIcon from '../../assets/images/plus.svg';
// import playIcon from '../../assets/images/play.svg';
// import volumeIcon from '../../assets/images/volume.svg';

class Playlist extends Component {
  static propTypes = {
    getPlaylistsDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    playlistDetails: PropTypes.shape({
      isLoading: PropTypes.bool,
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
    }).isRequired,
    currentMedia: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    loadMedia: PropTypes.func.isRequired,
  };

  state = {
    selectedMedia: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    const { getPlaylistsDetailsRequest } = this.props;

    getPlaylistsDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            <p>{playlist.description}</p>
            <span className="additional">
              Created by
              {' '}
              <a href="#2">Matheus Condini</a>
              {' '}
•
              {' '}
              {!!playlist.songs && playlist.songs.length}
              {' '}
songs, 1 h 19 min
            </span>

            <button type="button">Play</button>
          </div>
        </Header>

        <Medias cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Added at</th>
              <th>
                <img src={clockIcon} alt="Duration" />
              </th>
            </tr>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(media => (
                <Media
                  selected={this.state.selectedMedia === media.id}
                  playing={this.props.currentMedia && this.props.currentMedia.id === media.id}
                  key={media.id}
                  onClick={() => this.setState({ selectedMedia: media.id })}
                  onDoubleClick={() => this.props.loadMedia(media, playlist.songs)}
                >
                  <td>
                    <img src={plusIcon} alt="Adicionar" />
                  </td>
                  <td>{media.title}</td>
                  <td>{media.author}</td>
                  <td>{media.album}</td>
                  <td>2018-03-21</td>
                  <td>4:45</td>
                </Media>
              ))
            )}
          </tbody>
        </Medias>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.isLoading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentMedia: state.player.currentMedia,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
