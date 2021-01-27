import styled from 'styled-components/native';
import { Text } from '~/components';
import { colors, space, fontSize } from '~/theme';

export const TextNextSeven = styled(Text)`
  margin-top: ${space.page};
  margin-bottom: ${space.page};
  color: ${colors.white};
  font-size: ${fontSize.medium};
  padding-left: ${space.pageSmall};
`;
export const InfoNextDay = styled.View`
  margin-top: 5px;
  margin-bottom: ${space.page};
`;
export const Row = styled.View`
  flex-direction: row;
  margin-top: ${space.small};
  justify-content: space-between;
  margin-horizontal: ${space.pageSmall};
`;
export const Info = styled.View`
  flex-direction: row;
`;
export const Title = styled(Text)`
  color: ${colors.white};
  margin-right: ${space.small};
  font-weight: bold;
  font-size: ${fontSize.small};
`;
export const Value = styled(Text)`
  font-size: ${fontSize.small};
  color: ${colors.yellow};
  font-weight: bold;
`;
