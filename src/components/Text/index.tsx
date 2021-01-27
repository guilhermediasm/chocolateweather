import React from 'react';
import { TextBase } from './styles';

const Text: React.FC = ({ children, ...props }) => (
  <TextBase {...props}>{children}</TextBase>
);

export default Text;
