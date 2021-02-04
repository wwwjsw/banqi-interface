import React from 'react';
import { View, Text, FlatList } from 'react-native';

import Header from '../Components/Header'
import Balance from '../Components/Balance'
import Actions from '../Components/Actions'

export default function Home() {
  const FlatListHeader = () => {
    return (
      <>
        <Header />
        <Balance />
        <Actions />
      </>
    )
  }

  return (
    <FlatList 
      ListHeaderComponent={<FlatListHeader />}
    />
  );
}
