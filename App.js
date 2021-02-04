import * as React from 'react';
import { Text, View, StyleSheet, FlatList, StatusBar, Platform, SafeAreaView } from 'react-native';
import Home from './src/Containers/Home'

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}