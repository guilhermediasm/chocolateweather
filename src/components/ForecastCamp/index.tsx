import React from 'react';
import { Container, Title, Value } from './style';

type Props = {
  title: string;
  value: string;
};
const ForecastCamp: React.FC<Props> = ({ title, value }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
};

export default ForecastCamp;
