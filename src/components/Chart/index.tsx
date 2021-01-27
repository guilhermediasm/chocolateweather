import React from 'react';

import { colors } from '~/theme';
import { Scroll, Chart } from './styles';

type Props = {
  hourly: number[];
};

const ChartIndex: React.FC<Props> = ({ hourly, ...props }) => {
  return (
    <Scroll horizontal>
      <Chart
        {...props}
        data={{
          labels: [
            '1h',
            '2h',
            '3h',
            '4h',
            '5h',
            '6h',
            '7h',
            '8h',
            '9h',
            '10h',
            '11h',
            '12h',
            '13h',
            '14h',
            '15h',
            '16h',
            '17h',
            '18h',
            '19h',
            '20h',
            '21h',
            '22h',
            '23h',
            '24h',
          ],
          datasets: [
            {
              data: hourly,
            },
          ],
        }}
        chartConfig={{
          backgroundGradientTo: colors.yellow,
          backgroundGradientToOpacity: 0.2,
          backgroundGradientFromOpacity: 0.5,
          strokeWidth: 2,
          color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
      />
    </Scroll>
  );
};

export default ChartIndex;
