import React, { Component } from 'react';
import Slider from 'rc-slider';

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

export default class Player extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Current>
          <img
            src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
            alt="Img"
          />
          <div className="media-info">
            <span>Times like these</span>
            <small>Foo Fighters</small>
          </div>
        </Current>

        <Progress>
          <Controls>
            <button type="button">
              <img src={shuffleIcon} alt="Shuffle" />
            </button>
            <button type="button">
              <img src={backwardIcon} alt="Backward" />
            </button>
            <button type="button">
              <img src={playIcon} alt="Play" />
            </button>
            <button type="button">
              <img src={forwardIcon} alt="Forward" />
            </button>
            <button type="button">
              <img src={repeatIcon} alt="Repeat" />
            </button>
          </Controls>
          <Time>
            <span>0:10</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#1ed760' }}
                handleStyle={{ border: 0, outline: 'none', boxShadow: 'none' }}
                // value={0}
              />
            </ProgressSlider>
            <span>2:59</span>
          </Time>
        </Progress>

        <Volume>
          <img src={volumeIcon} alt="Volume" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{ display: 'none' }}
            value={100}
          />
        </Volume>
      </Container>
    );
  }
}
