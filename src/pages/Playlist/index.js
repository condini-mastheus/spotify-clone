import React, { Component } from 'react';

import {
  Container, PlaylistInfo, Info, Medias,
} from './styles';

import clockIcon from '../../assets/images/clock.svg';
import plusIcon from '../../assets/images/plus.svg';
import playIcon from '../../assets/images/play.svg';
import volumeIcon from '../../assets/images/volume.svg';

export default class Playlist extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <PlaylistInfo>
          <img
            src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21041/large_thumb_473-Techo-CD-Album-Cover.jpg"
            alt="Img"
          />

          <Info>
            <span>PLAYLIST</span>
            <h1>Title of Playlist</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consequat urna.
              Donec tempus commodo urna. Nunc gravida mi ligula, eget tincidunt elit tempus et.
              Vestibulum blandit tincidunt sagittis.
            </p>
            <span className="additional">
              Created by
              {' '}
              <a href="#2">Matheus Condini</a>
              {' '}
• 19 songs, 1 h 19 min
            </span>
          </Info>
        </PlaylistInfo>

        <Medias border="0" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th>
                <span />
              </th>
              <th>
                <span />
              </th>
              <th>
                <span>Title</span>
              </th>
              <th>
                <span>Artist</span>
              </th>
              <th>
                <span>Album</span>
              </th>
              <th>
                <span>Added at</span>
              </th>
              <th>
                <img src={clockIcon} alt="Duration" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="play">
                <img src={playIcon} alt="Duration" />
              </td>
              <td>
                <img src={plusIcon} alt="Duration" />
              </td>
              <td>APESHIT</td>
              <td>THE CARTERS</td>
              <td>EVERTHING IS LOVE</td>
              <td>2018-03-21</td>
              <td>1:45</td>
            </tr>
            <tr className="listening">
              <td className="play">
                <img src={volumeIcon} alt="Duration" />
              </td>
              <td>
                <img src={plusIcon} alt="Duration" />
              </td>
              <td>Dear Black Santa</td>
              <td>Dax</td>
              <td>Dear Black Santa</td>
              <td>2018-03-21</td>
              <td>17:45</td>
            </tr>
            <tr>
              <td className="play">
                <img src={volumeIcon} alt="Duration" />
              </td>
              <td>
                <img src={plusIcon} alt="Duration" />
              </td>
              <td>This is America</td>
              <td>Childshi Gambino</td>
              <td>This is America</td>
              <td>2018-03-21</td>
              <td>4:45</td>
            </tr>
          </tbody>
        </Medias>
      </Container>
    );
  }
}
