import styled from 'styled-components/native';
import Chart from '../Chart';
import Text from '../Text';
import Touchable from '../Touchable';
import { colors, space, fontSize } from '~/theme';
import { Icon as IconBase, moderateScale, scale } from '~/utils';

type Props = {
  focus: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Control = styled.View`
  margin-top: ${space.page};
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${space.page};
`;

export const TouchableToday = styled(Touchable)``;

export const TextToday = styled(Text)<Props>`
  color: ${(props) => (props.focus ? colors.white : colors.gray)};
  font-size: ${(props) =>
    props.focus ? fontSize.medium : fontSize.mediumSmall};
  border-color: ${colors.yellow};
  border-bottom-width: ${(props) => (props.focus ? '2px' : '0px')};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TouchableTomorrow = styled(Touchable)`
  margin-left: ${space.pageSmall};
`;

export const TextTomorrow = styled(Text)<Props>`
  color: ${(props) => (props.focus ? colors.white : colors.gray)};
  font-size: ${(props) =>
    props.focus ? fontSize.medium : fontSize.mediumSmall};
  border-color: ${colors.yellow};
  padding-bottom: 5px;
  border-bottom-width: ${(props) => (props.focus ? '2px' : '0px')};
`;

export const TouchableNextSeven = styled(Touchable)`
  margin-left: ${space.pageSmall};
  flex-direction: row;
  align-items: center;
`;

export const TextNextSeven = styled(Text)`
  color: ${colors.yellow};
  font-size: ${fontSize.mediumSmall};
`;

export const Icon = styled(IconBase).attrs({
  color: colors.yellow,
  size: moderateScale(18),
})`
  margin-top: ${scale(3)}px;
`;

export const RowTouchable = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChartScroll = styled(Chart)`
  margin-top: ${scale(15)}px;
  padding-left: ${space.page};
`;
