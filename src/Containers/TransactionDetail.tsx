import React from 'react';
import { View } from 'react-native';
import Typography from '../Components/Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../Constants';
import LottieView from 'lottie-react-native';

import { GoBack, TransactionDetailContainer } from './TransactionDetail.styles';

const TransactionDetail: React.FC = ({ route, navigation }) => {
    const  transactionInfo = route.params;

    return (
    <SafeAreaView>
        <GoBack onPress={() => navigation.goBack()}>
            <Typography color={colors.textBlack} bold fontSize={36} text="Voltar" />
        </GoBack>
        <TransactionDetailContainer>
            <View>
                <Typography color={colors.primary} bold fontSize={16} text="Onde gastei:" />
                <Typography color={colors.green} fontSize={16} text={transactionInfo.description} />
            </View>
            <View>
                <Typography color={colors.primary} bold fontSize={16} text="Quanto gastei:" />
                <Typography color={colors.green} fontSize={16} text={transactionInfo.amount} />
            </View>
        </TransactionDetailContainer>
        <LottieView
            autoPlay
            loop={false}
            speed={0.5}
            style={{
                width: 600,
                height: 400,
                alignSelf: 'center'
            }}
            source={require('../../assets/Animation/creditCard.json')}
        />
    </SafeAreaView>
    );
}

export default TransactionDetail;