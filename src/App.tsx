import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'mobx-react';
import { StatusBar } from 'react-native';
import store from '~/stores';
import { RoutesContainer } from '~/navigation';
import { colors } from '~/theme';

const App: React.FC = () => {
  return (
    <Provider {...store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.black} />
      <RoutesContainer />
    </Provider>
  );
};

export default App;
