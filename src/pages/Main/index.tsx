import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { inject, observer } from 'mobx-react';
import Geolocation from '@react-native-community/geolocation';
import { showError } from '~/helpers';
import { WeatherStore } from '~/stores';
import MainDumb from './Main';

type Props = {
  weather: WeatherStore;
};

const Main: React.FC<Props> = ({ weather }) => {
  const { name, country } = weather.currentWeather;
  const [isShowError, setIsShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const permissions = async (): Promise<void> => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      return;
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };

  const getCurrentWeather = async ({ lat, lon }: Coords): Promise<void> => {
    try {
      await weather.fetchCurrentWeather({ lat, lon });
      setIsLoading(false);
      setIsShowError(false);
    } catch (error) {
      setIsShowError(true);
      showError(error);
    }
  };

  const getHourlyWeather = async ({ lat, lon }: Coords): Promise<void> => {
    try {
      await weather.fetchHourlyWeather({ lat, lon });
      setIsLoading(false);
      setIsShowError(false);
    } catch (error) {
      setIsShowError(true);
      showError(error);
    }
  };

  const getPosition = (): void => {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        getCurrentWeather({ lat: latitude, lon: longitude });
        getHourlyWeather({ lat: latitude, lon: longitude });
      },
      (error) => {
        if (error.PERMISSION_DENIED) {
          setIsShowError(true);
          showError('Não foi possivel acessar sua localização.');
        }
      },
      { enableHighAccuracy: true, timeout: 1000 },
    );
  };

  useEffect(() => {
    permissions().then(() => {
      getPosition();
    });
  }, []);

  return (
    <MainDumb
      loading={isLoading}
      onUpdate={getPosition}
      onPressTryAgainCurrentWeather={getPosition}
      headerInfo={{ name, country }}
      weather={weather}
      showError={isShowError}
    />
  );
};

export default inject('weather')(observer(Main));
