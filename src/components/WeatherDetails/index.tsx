import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useNavigation } from '~/utils';
import ForecastInfo from '../ForecastInfo';
import { WeatherStore } from '~/stores';

import {
  Container,
  Control,
  TouchableToday,
  TouchableTomorrow,
  TextToday,
  TextTomorrow,
  Row,
  TouchableNextSeven,
  TextNextSeven,
  Icon,
  ChartScroll,
} from './styles';

type Props = {
  weather: WeatherStore;
};

const WeatherDetails: React.FC<Props> = ({ weather }) => {
  const [choiceWeatherCurrent, setChoiceWeatherCurrent] = useState(true);
  const { navigate } = useNavigation();

  function getHourly(): HourlyWeather {
    return choiceWeatherCurrent
      ? weather.oneCallWeather.today
      : weather.oneCallWeather.tomorrow;
  }

  function weatherCurrent(): number[] {
    return choiceWeatherCurrent
      ? weather.oneCallWeather.todayNumber
      : weather.oneCallWeather.tomorrowNumber;
  }

  return (
    <Container>
      <Control>
        <Row>
          <TouchableToday onPress={() => setChoiceWeatherCurrent(true)}>
            <TextToday focus={choiceWeatherCurrent}>Hoje</TextToday>
          </TouchableToday>
          <TouchableTomorrow onPress={() => setChoiceWeatherCurrent(false)}>
            <TextTomorrow focus={!choiceWeatherCurrent}>Amanhã</TextTomorrow>
          </TouchableTomorrow>
        </Row>
        <TouchableNextSeven onPress={() => navigate('NextSeven')}>
          <TextNextSeven>Próximos 7 dias </TextNextSeven>
          <Icon name="chevron-right" />
        </TouchableNextSeven>
      </Control>
      <ForecastInfo infoData={getHourly()} />
      <ChartScroll hourly={weatherCurrent()} />
    </Container>
  );
};

export default observer(WeatherDetails);
