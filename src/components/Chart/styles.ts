import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LineChart } from '~/utils';

export const Scroll = styled.ScrollView``;

export const Chart = styled(LineChart).attrs({
  width: Dimensions.get('window').width * 3,
  height: 190,
  yAxisSuffix: 'ºC',
  yAxisInterval: 1,
  withInnerLines: false,
  withOuterLines: false,
  segments: 6,
})``;
