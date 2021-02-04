import React from 'react'

import {
    TransactionItem,
    TransactionContainerIcon,
    IconLineTop,
    IconLineDown,
    TransactionContainerInfo,
    TransactionContainerAmount,
} from './styles'

import ArrowDown from '../../Icons/ArrowDown'
import Typography from '../Typography';
import { colors } from '../../Constants';

type TypeTransaction = {
    _id: string;
    date: string;
    description: string;
    amount: string;
}

interface ITransaction {
    isFirst: boolean;
    isLast: boolean;
    transactionInfo: TypeTransaction;
    navigation: any;
}

export default function Transaction(props: ITransaction) {
    const { isFirst, isLast, transactionInfo, navigation } = props;

    return (
        <TransactionItem paddingTop={isFirst} onPress={() => navigation.navigate('TransactionDetail', transactionInfo)}>
            <TransactionContainerIcon>
                <IconLineTop transparent={isFirst} />
                <ArrowDown />
                <IconLineDown transparent={isLast}/>
            </TransactionContainerIcon>
            <TransactionContainerInfo>
                <Typography
                    text={transactionInfo.description}
                    color={colors.textBlack}
                    fontSize={14}
                />
                <Typography
                    text={`Recebido em ${new Date(transactionInfo.date).toLocaleDateString('pt-BR')}`}
                    color={colors.green}
                    fontSize={12}
                />
            </TransactionContainerInfo>
            <TransactionContainerAmount>
                <Typography
                    text={transactionInfo.amount}
                    color={isFirst ? colors.green : colors.textBlack}
                    fontSize={14}
                />
            </TransactionContainerAmount>
        </TransactionItem>
    );
}
