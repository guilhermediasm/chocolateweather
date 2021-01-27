export default function currentWeatherDTO(
  data: CurrentWeatherApi,
): CurrentWeather {
  const weather = {
    ...data,
    country: `, ${data.sys?.country}`,
  };

  delete weather.sys;
  delete weather.coord;

  return weather;
}
