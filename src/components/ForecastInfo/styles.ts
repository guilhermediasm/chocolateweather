import styled from 'styled-components/native';
import { colors, space } from '~/theme';
import { moderateScale, scale } from '~/utils';

export const ForecastInfoContainer = styled.View`
  margin-top: ${scale(15)}px;
  height: ${moderateScale(80)}px;
  align-items: center;
  background-color: ${colors.grayDark};
  border-radius: ${moderateScale(10)}px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-horizontal: ${space.page};
`;
