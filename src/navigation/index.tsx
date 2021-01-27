import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { Routes } from './enums';
import Public from './public.routes';

const RoutesContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Public />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export { RoutesContainer, Routes };
