/* eslint-disable react/no-array-index-key */
import React from 'react';
import NextDay from '../NextDay';

import { Container } from './styles';

type InfoNextSevenData = {
  icon: string;
  date: string;
  max: string;
  min: string;
};

type Props = {
  data: InfoNextSevenData[];
};

const ListNextSevenDay: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((info, index) => (
        <NextDay color={false} key={index} infoNextDay={info} />
      ))}
    </Container>
  );
};

export default ListNextSevenDay;
