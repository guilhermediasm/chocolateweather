import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '~/theme';
import { useNavigation } from '~/utils';
import If from '../IF';
import TryAgain from '../TryAgain';
import {
  Container,
  City,
  Country,
  Header,
  Icon,
  ButtonUpdate,
  TextButtonUpdate,
  LoadingWrap,
  TextUpdate,
} from './styles';

type Props = {
  hasBackButton?: boolean;
  showError?: boolean;
  isLoading?: boolean;
  headerInfo: HeaderInfo;
  onPressTryAgainCurrentWeather(): void;
  onUpdate?(): void;
};

const PageWrap: React.FC<Props> = ({
  onPressTryAgainCurrentWeather,
  isLoading = false,
  onUpdate = () => {},
  children,
  headerInfo,
  hasBackButton = false,
  showError = false,
}) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header isCentered={hasBackButton}>
        <If condition={hasBackButton}>
          <Icon onPress={() => goBack()} name="chevron-left" />
        </If>
        <If condition={!isLoading}>
          <City>
            {headerInfo.name}
            <Country>{headerInfo.country}</Country>
          </City>
        </If>
        <If condition={!hasBackButton && !isLoading}>
          <ButtonUpdate onPress={() => onUpdate()}>
            <TextButtonUpdate>Atualizar</TextButtonUpdate>
          </ButtonUpdate>
        </If>
      </Header>
      <If condition={showError && isLoading}>
        <TryAgain onPressTryAgain={onPressTryAgainCurrentWeather} />
      </If>
      <If condition={!showError && isLoading}>
        <LoadingWrap>
          <ActivityIndicator size="large" color={colors.yellow} />
          <TextUpdate>Atualizando...</TextUpdate>
        </LoadingWrap>
      </If>
      <If condition={!isLoading}>{children}</If>
    </Container>
  );
};

export default PageWrap;
