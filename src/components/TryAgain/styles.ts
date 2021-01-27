import styled from 'styled-components/native';
import { moderateScale } from '~/utils';
import { colors, space, fontSize } from '~/theme';
import Text from '../Text';
import Touchable from '../Touchable';

export const Try = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image``;

export const TextAgain = styled(Text)`
  font-size: ${fontSize.big};
  color: ${colors.black};
  font-weight: bold;
`;

export const TouchableTryAgain = styled(Touchable)`
  padding: ${space.small};
  border-radius: ${moderateScale(5)}px;
  margin-top: ${space.large};
  background-color: ${colors.yellow};
`;
