import React from 'react';

type Props = {
  condition: boolean;
};

const If: React.FC<Props> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

export default If;
