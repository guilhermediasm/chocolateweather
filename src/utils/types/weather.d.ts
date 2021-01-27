declare type CurrentWeatherApi = {
  coord?: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  sys?: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
};

declare type WeatherApi = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

declare type HourlyWeather = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherApi[];
  pop: number;
};

declare type HourlyWeatherSeven = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherApi[];
  dailySeven: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
  };
  pop: number;
};

declare type Daily = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: number;
  pop: number;
  uvi: number;
};

declare type OnCallWeatherApi = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: HourlyWeather[];
  daily: Daily[];
};

declare type OneCallWeather = {
  todayNumber: number[];
  tomorrowNumber: number[];
  today: HourlyWeather;
  tomorrow: HourlyWeather;
  dailySeven: Daily[];
};

declare type CurrentWeather = {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number | string;
    feels_like: number;
    temp_min: number | string;
    temp_max: number | string;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  country?: string;
  id: number;
  name: string;
};

declare type CurrentWeatherParams = {
  lat: number;
  lon: number;
};

declare type HeaderInfo = {
  name: string;
  country?: string;
};

declare type Coords = {
  lat: number;
  lon: number;
};
