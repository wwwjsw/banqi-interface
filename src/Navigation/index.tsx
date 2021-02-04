// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Containers/Home'
import Intro from '../Containers/Intro'
import TransactionsList from '../Containers/TransactionsList'
import TransactionDetail from '../Containers/TransactionDetail'

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="List"
        component={TransactionsList}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default App;