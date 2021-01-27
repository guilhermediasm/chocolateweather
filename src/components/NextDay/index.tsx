import React from 'react';

import {
  NextDayContainer,
  InfoNextSeven,
  IconAndText,
  Icon,
  TextNextday,
  Temp,
  Max,
  Min,
  Line,
} from './styles';

type Props = {
  color: boolean;
  infoNextDay: { icon: string; date: string; max: string; min: string };
};

const NextDay: React.FC<Props> = ({ color = true, infoNextDay }) => {
  return (
    <NextDayContainer>
      <InfoNextSeven color={color}>
        <IconAndText>
          <Icon
            resizeMode="center"
            source={{
              uri: `http://openweathermap.org/img/wn/${infoNextDay.icon}@2x.png`,
            }}
          />
          <TextNextday color={color}>{infoNextDay.date}</TextNextday>
        </IconAndText>

        <Temp>
          <Max>{infoNextDay.max}</Max>
          <Min>{infoNextDay.min}</Min>
        </Temp>
      </InfoNextSeven>
      <Line />
    </NextDayContainer>
  );
};

export default NextDay;
