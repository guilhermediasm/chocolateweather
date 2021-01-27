import axios from 'axios';

const baseURL: string = 'https://api.openweathermap.org/data/2.5/';

const api = axios.create({
  baseURL,
  timeout: 20000,
  params: {
    appid: 'c73415754d328de13c99c887f1a61e69',
    lang: 'pt_br',
    units: 'metric',
    mode: 'json',
    exclude: 'current,minutely',
  },
});

export default api;
