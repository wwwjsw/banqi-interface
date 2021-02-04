import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './src/Constants';

import Navigation from './src/Navigation'

import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}