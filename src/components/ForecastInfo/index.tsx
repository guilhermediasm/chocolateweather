import React from 'react';
import { formatToKm, formatKmPerSecond } from '~/helpers';
import ForecastField from '../ForecastCamp';

import { ForecastInfoContainer } from './styles';

type InfoData = {
  infoData: {
    pressure: number;
    humidity: number;
    visibility: number;
    wind_speed: number;
  };
};

const ForecastInfo: React.FC<InfoData> = ({ infoData }) => (
  <ForecastInfoContainer>
    <ForecastField title="Pressão" value={`${infoData.pressure}mb`} />
    <ForecastField
      title="Visibilidade"
      value={formatToKm(infoData.visibility)}
    />
    <ForecastField title="Humidade" value={`${infoData.humidity}%`} />
    <ForecastField
      title="Vento"
      value={formatKmPerSecond(infoData.wind_speed)}
    />
  </ForecastInfoContainer>
);

export default ForecastInfo;
