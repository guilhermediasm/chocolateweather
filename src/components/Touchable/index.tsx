import React from 'react';
import { RectButton, RectButtonProperties } from '~/utils';

const Touchable: React.FC<RectButtonProperties> = ({ children, ...props }) => {
  return <RectButton {...props}>{children}</RectButton>;
};

export default Touchable;
