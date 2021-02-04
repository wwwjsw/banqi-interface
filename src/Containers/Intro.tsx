import React from 'react';
import { View } from 'react-native';

import { IntroContainer, IntroContainerGoTo } from './Intro.styles';
import Typography from '../Components/Typography';
import { colors } from '../Constants';

const Intro: React.FC = ({ navigation }) => {
  return (
    <IntroContainer>
        <IntroContainerGoTo
            onPress={() => navigation.navigate('Home')}
        >
            <Typography fontSize={22} bold color={colors.primary} text="Minha Conta 💳" />
        </IntroContainerGoTo>
    </IntroContainer>)
}

export default Intro;