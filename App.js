import * as React from 'react';
import { Text, View, StyleSheet, FlatList, StatusBar, Platform, SafeAreaView } from 'react-native';
import { colors } from './src/Constants';
import Home from './src/Containers/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />
      <Home />
    </SafeAreaView>
  );
}