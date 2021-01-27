import React from 'react';
import { observer } from 'mobx-react';
import { If, PageWrap, WeatherDetails } from '~/components';
import { getDateCurrent, formatNumber } from '~/helpers';
import { InfoTemp, Temp, Info, Today, TodayText, TodayRun } from './styles';
import { WeatherStore } from '~/stores';

type Props = {
  headerInfo: HeaderInfo;
  showError: boolean;
  loading: boolean;
  onPressTryAgainCurrentWeather(): void;
  onUpdate(): void;
  weather: WeatherStore;
};

const MainDumb: React.FC<Props> = ({
  onPressTryAgainCurrentWeather,
  onUpdate,
  loading = false,
  weather,
  headerInfo,
  showError,
}) => {
  const { day, max, min } = weather.oneCallWeather.dailySeven[0].temp;
  return (
    <PageWrap
      isLoading={loading}
      onUpdate={onUpdate}
      onPressTryAgainCurrentWeather={onPressTryAgainCurrentWeather}
      headerInfo={headerInfo}
      showError={showError}
    >
      <InfoTemp>
        <Temp>{formatNumber(day)}º</Temp>
        <Info>{`Max: ${formatNumber(max)}º  Min: ${formatNumber(min)}º`}</Info>
      </InfoTemp>
      <Today>
        <TodayText>Hoje</TodayText>
        <TodayRun>{getDateCurrent()}</TodayRun>
      </Today>
      <WeatherDetails weather={weather} />
    </PageWrap>
  );
};

export default observer(MainDumb);
