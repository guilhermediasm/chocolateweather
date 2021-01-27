import React from 'react';
import { PageWrap, ListNextSevenDay, NextDay } from '~/components';
import {
  formatKmPerSecond,
  formatNumber,
  formatToKm,
  getFormatDT,
} from '~/helpers';

import { TextNextSeven, InfoNextDay, Row, Info, Title, Value } from './styles';

type InfoNextSevenData = {
  icon: string;
  date: string;
  max: string;
  min: string;
};

type Props = {
  headerInfo: HeaderInfo;
  nextSevenData: InfoNextSevenData[];
  nextData: HourlyWeatherSeven;
  onPressTryAgainCurrentWeather(): void;
};

const NextSevenDumb: React.FC<Props> = ({
  headerInfo,
  nextSevenData,
  nextData,
  onPressTryAgainCurrentWeather,
}) => {
  const infoNextDay = {
    icon: nextData.weather[0].icon,
    date: getFormatDT(nextData.dt),
    max: `${formatNumber(nextData.dailySeven.temp.max)}º`,
    min: `${formatNumber(nextData.dailySeven.temp.min)}º`,
  };
  return (
    <PageWrap
      onPressTryAgainCurrentWeather={onPressTryAgainCurrentWeather}
      headerInfo={headerInfo}
      hasBackButton
    >
      <TextNextSeven>Próximos 7 dias</TextNextSeven>
      <NextDay color infoNextDay={infoNextDay} />
      <InfoNextDay>
        <Row>
          <Info>
            <Title>Presão</Title>
            <Value>{nextData.pressure}mb</Value>
          </Info>
          <Info>
            <Title>Humidade</Title>
            <Value>{nextData.humidity}%</Value>
          </Info>
        </Row>
        <Row>
          <Info>
            <Title>Vento</Title>
            <Value>{formatKmPerSecond(nextData.wind_speed)}</Value>
          </Info>
          <Info>
            <Title>Visibilidade</Title>
            <Value>{formatToKm(nextData.visibility)}</Value>
          </Info>
        </Row>
      </InfoNextDay>
      <ListNextSevenDay data={nextSevenData} />
    </PageWrap>
  );
};

export default NextSevenDumb;
