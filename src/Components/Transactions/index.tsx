import React from 'react'

import { transactions } from '../../Mock/data.json'
import { colors } from '../../Constants';

import Typography from '../Typography'
import Transaction from '../Transaction'

import { TransactionsContainer } from './styles'

export default function Transactions() {
    const filteredTransactions = transactions.reverse().slice(0, 3)

    return (
        <TransactionsContainer>
            <Typography
                text="Histórico de transações"
                fontSize={14}
                color={colors.textBlack}
            />
            {filteredTransactions.map((item, i, filtered) => 
                <Transaction
                    isFirst={filtered[0]._id === item._id}
                    isLast={filtered.reverse()[0]._id === item._id}
                    transactionInfo={item}
                />
            )}
        </TransactionsContainer>
  );
}
