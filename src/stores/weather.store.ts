import { action, observable } from 'mobx';
import { WeatherApi } from '~/api';
import currentWeatherDTO from './dto/currentWeather.dto';
import oneCallWeatherDTO from './dto/oneCallWeather.dto';

const defaultCurrentWather: CurrentWeather = {
  weather: [
    {
      id: 0,
      main: '',
      description: '',
      icon: '',
    },
  ],
  base: '',
  main: {
    temp: '--',
    feels_like: 0,
    temp_min: '--',
    temp_max: '--',
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
  },
  country: '',
  id: 0,
  name: '',
};

const defaultHourlyWather: OneCallWeather = {
  todayNumber: [0, 100],
  tomorrowNumber: [0, 100],
  today: {
    dt: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    pop: 0,
  },
  tomorrow: {
    dt: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    pop: 0,
  },
  dailySeven: [
    {
      dt: 0,
      sunrise: 0,
      sunset: 0,
      temp: {
        day: 0,
        min: 0,
        max: 0,
        night: 0,
        eve: 0,
        morn: 0,
      },
      feels_like: {
        day: 0,
        night: 0,
        eve: 0,
        morn: 0,
      },
      pressure: 0,
      humidity: 0,
      dew_point: 0,
      wind_speed: 0,
      wind_deg: 0,
      weather: [
        {
          id: 0,
          main: '',
          description: '',
          icon: '',
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 0,
    },
  ],
};
class Weather {
  api: WeatherApi;

  constructor() {
    this.api = new WeatherApi();
  }

  @observable
  currentWeather: CurrentWeather = defaultCurrentWather;

  @observable
  oneCallWeather: OneCallWeather = defaultHourlyWather;

  @action
  async fetchCurrentWeather({ lat, lon }: Coords): Promise<void> {
    const response = await this.api.getApiCurrentWeather({ lat, lon });
    const newCurrentWeather = currentWeatherDTO(response);
    this.currentWeather = { ...newCurrentWeather };
  }

  @action
  async fetchHourlyWeather({ lat, lon }: Coords): Promise<void> {
    const response = await this.api.getApiHourlyWeather({ lat, lon });

    this.oneCallWeather = oneCallWeatherDTO(response);
  }
}

export default Weather;
