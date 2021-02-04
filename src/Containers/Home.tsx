import React from 'react';
import { FlatList } from 'react-native';

import Header from '../Components/Header'
import Balance from '../Components/Balance'
import Actions from '../Components/Actions'
import Loan from '../Components/Loan'
import Transactions from '../Components/Transactions'
import SeeMore from '../Components/SeeMore'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const FlatListHeader = () => {
    return (
      <SafeAreaView>
        <Header />
        <Balance />
        <Actions />
        <Loan />
        <Transactions />
        <SeeMore />
      </SafeAreaView>
    )
  }

  return (
    <FlatList 
      ListHeaderComponent={<FlatListHeader />}
    />
  );
}
