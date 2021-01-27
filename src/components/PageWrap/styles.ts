import styled from 'styled-components/native';
import { colors, space, fontSize } from '~/theme';
import { Icon as IconBase, moderateScale } from '~/utils';
import Text from '../Text';
import Touchable from '../Touchable';

export const Container = styled.View`
  flex: 1;
`;

type HeaderProps = {
  isCentered: boolean;
};
export const Header = styled.View<HeaderProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.isCentered ? 'center' : 'space-between'};
  width: 100%;
  margin-top: ${space.page};
  padding-horizontal: ${space.page};
`;

export const Country = styled.Text`
  color: ${colors.gray};
`;

export const City = styled(Text)`
  color: ${colors.white};
  font-size: ${fontSize.medium};
  align-self: flex-start;
`;

export const ButtonUpdate = styled(Touchable)``;

export const TextButtonUpdate = styled(Text)`
  color: ${colors.yellow};
  font-size: ${fontSize.small};
`;

export const Icon = styled(IconBase).attrs({
  color: colors.white,
  size: moderateScale(24),
})`
  position: absolute;
  margin-left: ${space.pageSmall};
  left: 0;
`;

export const LoadingWrap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextUpdate = styled(Text)`
  color: ${colors.yellow};
  font-size: ${fontSize.medium};
  margin-top: ${space.page};
  text-align: center;
`;
