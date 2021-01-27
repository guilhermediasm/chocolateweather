import ResponseError from '~/utils/entity/ResponseError';
import api from '../api';

export default class WeatherApi {
  getApiCurrentWeather = async (
    params: CurrentWeatherParams, // coloquei de exemplo pra saber..
  ): Promise<CurrentWeatherApi> => {
    try {
      const { data } = await api.get('weather?', { params });
      return data;
    } catch (error) {
      throw new ResponseError(error).getMessage();
    }
  };

  getApiHourlyWeather = async (
    params: CurrentWeatherParams,
  ): Promise<HourlyWeatherApi> => {
    try {
      const { data } = await api.get('onecall?', { params });
      return data;
    } catch (error) {
      throw new ResponseError(error).getMessage();
    }
  };
}
