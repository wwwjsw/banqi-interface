import React from 'react'

import { transactions } from '../Mock/data.json'
import { colors } from '../Constants';

import Typography from '../Components/Typography'
import Transaction from '../Components/Transaction'

import { TransactionsListContainer } from './TransactionsList.styles'

export default function TransactionsList({navigation}) {

    return (
        <TransactionsListContainer>
            <Typography
                text="Histórico de transações"
                fontSize={14}
                color={colors.textBlack}
            />
            {transactions.map((item, i, filtered) => 
                <Transaction
                    navigation={navigation}
                    isFirst={filtered[0]._id === item._id}
                    isLast={filtered.reverse()[0]._id === item._id}
                    transactionInfo={item}
                />
            )}
        </TransactionsListContainer>
  );
}
