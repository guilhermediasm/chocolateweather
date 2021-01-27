import React from 'react';
import { inject, observer } from 'mobx-react';
import { WeatherStore } from '~/stores';
import {
  formatKmPerSecond,
  formatNumber,
  formatToKm,
  getFormatDT,
} from '~/helpers';
import NextSevenDumb from './NextSeven';

type Props = {
  weather: WeatherStore;
};

type Seven = {
  icon: string;
  date: string;
  max: string;
  min: string;
};

const NextSeven: React.FC<Props> = ({ weather }) => {
  const { name, country } = weather.currentWeather;
  const nextData = {
    ...weather.oneCallWeather.tomorrow,
    dailySeven: weather.oneCallWeather.dailySeven[0],
  };

  const getNextSevenData = (): Seven[] => {
    const nexArray = weather.oneCallWeather.dailySeven.map((value) => {
      return {
        icon: value.weather[0].icon,
        date: getFormatDT(value.dt),
        max: `${formatNumber(value.temp.max)}º`,
        min: `${formatNumber(nextData.dailySeven.temp.min)}º`,
      };
    });

    return nexArray.splice(2, 7);
  };

  return (
    <NextSevenDumb
      nextSevenData={getNextSevenData()}
      onPressTryAgainCurrentWeather={() => {}}
      nextData={nextData}
      headerInfo={{ name, country }}
    />
  );
};

export default inject('weather')(observer(NextSeven));
