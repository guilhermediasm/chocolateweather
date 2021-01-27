import styled from 'styled-components/native';
import { colors, fontSize, space } from '~/theme';
import { moderateScale, scale } from '~/utils';
import Text from '../Text';

type Props = {
  color: boolean;
};

export const NextDayContainer = styled.View`
  margin-horizontal: ${space.pageSmall};
  margin-top: ${space.small};
`;
export const InfoNextSeven = styled.View<Props>`
  flex-direction: row;
  margin-top: ${(props) => (props.color ? 0 : moderateScale(12))}px;
  margin-bottom: ${moderateScale(15)}px;
  justify-content: space-evenly;
`;

export const IconAndText = styled.View`
  flex-direction: row;
`;
export const Icon = styled.Image`
  height: ${moderateScale(30)}px;
  width: ${scale(30)}px;
`;
export const TextNextday = styled(Text)<Props>`
  font-size: ${fontSize.medium};
  width: ${scale(240)}px;
  margin-left: ${space.pageSmall};
  font-weight: bold;
  color: ${(props) => (props.color ? colors.white : '#000')};
`;
export const Temp = styled.View`
  flex-direction: row;
`;
export const Max = styled(Text)`
  font-size: ${fontSize.medium};
  margin-right: ${space.pageSmall};
  color: ${colors.yellow};
`;
export const Min = styled(Text)`
  font-size: ${fontSize.medium};
  color: ${colors.grayLight};
`;
export const Line = styled.View`
  height: ${moderateScale(1)}px;
  background-color: ${colors.gray};
`;
