import { formatNumber } from '~/helpers';

export default function oneCallWeatherDTO(
  data: OnCallWeatherApi,
): OneCallWeather {
  const todayNumber = data.hourly
    .slice(0, 24)
    .map((value) => formatNumber(value.temp) as number);
  const tomorrowNumber = data.hourly
    .slice(25, 48)
    .map((value) => formatNumber(value.temp) as number);

  return {
    todayNumber,
    tomorrowNumber,
    today: data.hourly[0],
    tomorrow: data.hourly[24],
    dailySeven: data.daily,
  };
}
