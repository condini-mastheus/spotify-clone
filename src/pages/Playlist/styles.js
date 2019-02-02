import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    img {
      height: 48px;
    }
  }

  ${props => props.loading
    && css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
    }

    .additional {
      letter-spacing: normal;
      font-size: 12px;
      text-transform: initial;
      line-height: 22px;
      color: #b3b3b3;
      display: block;
      margin-top: 10px;
    }

    h1 {
      font-size: 48px;
      margin-top: 10px;
      color: #fff;
    }

    p {
      color: #b3b3b3;
      font-size: 12px;
      line-height: 16px;
      text-align: justify;
      margin: 10px 0 0 0;
    }

    button {
      background: #1db854;
      height: 32px;
      border-radius: 16px;
      color: #fff;
      line-height: 32px;
      padding: 0 35px;
      border: none;
      margin-top: 10px;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }
  }
`;

export const Medias = styled.table`
  margin-top: 60px;
  text-align: left;
  width: 100%;
  font-size: 0;
  border: none;
  padding: 0;
  border-spacing: 0;
  border-collapse: separate;

  th {
    border-bottom: 1px solid #282828;
    vertical-align: middle;
    text-align: left;
    padding: 5px 10px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.11px;
    font-weight: 300;
    color: #b3b3b3;

    &:last-child {
      text-align: right;
    }
  }
`;

export const Media = styled.tr`
  background: ${props => (props.selected ? 'rgba(255, 255, 255, 0.03)' : 'transparent')};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  td {
    border-bottom: 1px solid #282828;
    padding: 0 10px;
    line-height: 40px;
    text-align: left;
    font-size: 13px;
    color: ${props => (props.playing ? '#1ed760' : '#fff')}

    &:first-child {
      width: 80px;
      text-align: right;
      img {
        position: relative;
        top: 2px;
      }
    }

    &:last-child {
      text-align: right;
    }

    &.play {
      img {
        visibility: hidden;
      }
    }
  }
`;
