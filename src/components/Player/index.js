import React, { Component, Fragment } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import volumeIcon from '../../assets/images/volume.svg';
import shuffleIcon from '../../assets/images/shuffle.svg';
import backwardIcon from '../../assets/images/backward.svg';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import forwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

class Player extends Component {
  componentDidMount() {}

  render() {
    const {
      player,
      playMedia,
      pauseMedia,
      nextMedia,
      prevMedia,
      playingMedia,
      handlePosition,
      setPosition,
      setVolume,
      position,
      duration,
      positionShown,
      progress,
    } = this.props;
    return (
      <Container>
        {!!player.currentMedia && (
          <Sound
            url={player.currentMedia.file}
            playStatus={player.status}
            onFinishedPlaying={nextMedia}
            onPlaying={playingMedia}
            position={player.position}
            volume={player.volume}
          />
        )}

        <Current>
          {!!player.currentMedia && (
            <Fragment>
              <img src={player.currentMedia.thumbnail} alt={player.currentMedia.title} />
              <div className="media-info">
                <span>{player.currentMedia.title}</span>
                <small>{player.currentMedia.author}</small>
              </div>
            </Fragment>
          )}
        </Current>

        <Progress>
          <Controls>
            <button type="button">
              <img src={shuffleIcon} alt="Shuffle" />
            </button>
            <button type="button" onClick={prevMedia}>
              <img src={backwardIcon} alt="Backward" />
            </button>

            {!!player.currentMedia && player.status === Sound.status.PLAYING ? (
              <button type="button" onClick={pauseMedia}>
                <img src={pauseIcon} alt="Pause" />
              </button>
            ) : (
              <button type="button" onClick={playMedia}>
                <img src={playIcon} alt="Play" />
              </button>
            )}

            <button type="button" onClick={nextMedia}>
              <img src={forwardIcon} alt="Forward" />
            </button>
            <button type="button">
              <img src={repeatIcon} alt="Repeat" />
            </button>
          </Controls>
          <Time>
            <span>{positionShown || position}</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#1ed760' }}
                handleStyle={{ border: 0, outline: 'none', boxShadow: 'none' }}
                max={1000}
                onChange={value => handlePosition(value / 1000)}
                onAfterChange={value => setPosition(value / 1000)}
                value={progress}
              />
            </ProgressSlider>
            <span>{duration}</span>
          </Time>
        </Progress>

        <Volume>
          <img src={volumeIcon} alt="Volume" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{ display: 'none' }}
            onChange={setVolume}
            value={player.volume}
          />
        </Volume>
      </Container>
    );
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    status: PropTypes.string,
    currentMedia: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      volume: PropTypes.number,
    }),
  }).isRequired,
  playMedia: PropTypes.func.isRequired,
  pauseMedia: PropTypes.func.isRequired,
  nextMedia: PropTypes.func.isRequired,
  prevMedia: PropTypes.func.isRequired,
  playingMedia: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  positionShown: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

function msToTime(miliseconds) {
  if (!miliseconds) return null;

  const tmpTime = moment.duration(miliseconds);
  const minutes = tmpTime.minutes();
  const seconds = tmpTime.seconds() < 10 ? `0${tmpTime.seconds()}` : tmpTime.seconds();

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    (state.player.positionShown || state.player.position) * (1000 / state.player.duration) || 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
