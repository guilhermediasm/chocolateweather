import React from 'react';

import { Try, Image, TextAgain, TouchableTryAgain } from './styles';

import { ImageRefresh } from '~/assets';

type Props = {
  onPressTryAgain(): void;
};

const TryAgainContainer: React.FC<Props> = ({ onPressTryAgain }) => {
  return (
    <Try>
      <Image source={ImageRefresh} />
      <TouchableTryAgain onPress={() => onPressTryAgain()}>
        <TextAgain>Tente novamente!</TextAgain>
      </TouchableTryAgain>
    </Try>
  );
};

export default TryAgainContainer;
