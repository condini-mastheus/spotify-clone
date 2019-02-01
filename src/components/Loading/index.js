import React from 'react';

import { Spinner } from './styles';

import loadingIcon from '../../assets/images/loading.svg';

const Loading = () => (
  <Spinner>
    <img src={loadingIcon} alt="Loading..." />
  </Spinner>
);

export default Loading;
