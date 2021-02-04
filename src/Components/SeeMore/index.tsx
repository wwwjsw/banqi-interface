import React from 'react'

import { SeeMoreContainer } from './styles'

import ArrowDown from '../../Icons/ArrowDown'
import Typography from '../Typography';
import { colors } from '../../Constants';


export default function SeeMore({ navigation }) {
    return (
        <SeeMoreContainer
            onPress={() => navigation.navigate('List')}
        >
            <Typography
                color={colors.blue}
                fontSize={14}
                bold
                text="VER MAIS"
            />
        </SeeMoreContainer>
    );
}
