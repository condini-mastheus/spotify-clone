import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.div`
  img {
    animation: ${spin} 2s linear infinite;
  }
`;
