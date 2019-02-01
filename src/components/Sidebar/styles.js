import styled from 'styled-components';

import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrap {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
    font-weight: 700;
  }

  li {
    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      white-space: nowrap;
      font-weight: 300;

      font-weight: ${props => (props.main ? '700' : 'normal')}

      &:hover {
        color: #fff;
      }
    }

    ${Spinner} {
      display: inline-block;
      position: relative;
      top: 3px;
      margin-left: 5px;

      img {
        height: 14px;
      }
    }
  }
`;

export const NewPlaylist = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #282828;

  font-size: 13px;
  color: #b3b3b3;
  padding: 15px 25px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
  }
`;
