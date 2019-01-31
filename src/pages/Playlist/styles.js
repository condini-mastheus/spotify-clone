import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const PlaylistInfo = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  h1 {
    font-size: 48px;
    color: #fff;
  }

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
  }

  p {
    color: #b3b3b3;
    font-size: 11px;
    line-height: 16px;
    text-align: justify;
    margin: 10px 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Medias = styled.table`
  margin-top: 60px;
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
    padding: 10px;

    &:first-child {
      text-align: right;
      width: 45px;
      visibily
    }
    &:nth-child(2) {
      text-align: right;
      width: 40px;
    }

    span {
      font-size: 10px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
      color: #b3b3b3;
    }
  }


  tbody {
    tr {

      &.listening {

        td {
          color: #1ed760;
        }

        td.play {
          img {
            visibility: visible !important;
          }
        }
      }

      &:hover {
        background: rgba(255, 255, 255, .05);

        td.play {
          img {
            visibility: visible;
          }
        }
      }
    }
  }

  td {
    &:first-child {
      text-align: center;

      img {
        width: 25px;
      }
    }

    &:nth-child(2) {
      text-align: center;
    }

    &.play {
      img {
        visibility: hidden;
      }
    }

    border-bottom: 1px solid #282828;
    padding: 10px;
    vertical-align: middle;
    text-align: left;
    font-size: 12px;
  }
`;
