import React from 'react';
import Lottie from 'react-lottie';

import { Container } from './styles';

import animationData from '~/assets/animations/loader.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default Loader;
