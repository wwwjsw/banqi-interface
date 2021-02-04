import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Components/Header'
import Balance from '../Components/Balance'

export default function Home() {
  const FlatListHeader = () => {
    return (
      <>
        <Header />
        <Balance />
      </>
    )
  }

  return (
    <FlatList 
      ListHeaderComponent={<FlatListHeader />}
    />
  );
}
