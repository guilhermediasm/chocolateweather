import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, NextSeven } from '~/pages';
import { colors } from '~/theme';
import { Routes } from './enums';

const Stack = createStackNavigator();

const PublicStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MAIN}
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: colors.black } }}
    >
      <Stack.Screen name={Routes.MAIN} component={Main} />
      <Stack.Screen name={Routes.NEXT_SEVEN} component={NextSeven} />
    </Stack.Navigator>
  );
};

export default PublicStack;
