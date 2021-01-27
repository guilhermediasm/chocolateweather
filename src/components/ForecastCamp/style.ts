import styled from 'styled-components/native';
import { colors, fontSize } from '~/theme';
import { moderateScale } from '~/utils';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${colors.gray};
  font-size: ${fontSize.small};
`;

export const Value = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.small};
`;
