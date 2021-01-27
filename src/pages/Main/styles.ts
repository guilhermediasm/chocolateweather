import styled from 'styled-components/native';
import { Text } from '~/components';
import { colors, space, fontSize } from '~/theme';
import { moderateScale, scale } from '~/utils';

export const InfoTemp = styled.View`
  margin-top: ${space.page};
  align-items: center;
`;
export const Temp = styled(Text)`
  font-size: ${moderateScale(80)}px;
  color: ${colors.white};
`;
export const Info = styled(Text)`
  font-size: ${fontSize.medium};
  margin-top: ${scale(-10)}px;
  color: ${colors.white};
`;

export const Today = styled.View`
  margin-top: ${scale(35)}px;
  align-items: center;
`;
export const TodayText = styled(Text)`
  color: ${colors.white};
  font-size: ${moderateScale(48)}px;
`;
export const TodayRun = styled(Text)`
  color: ${colors.gray};
  font-size: ${fontSize.medium};
`;
