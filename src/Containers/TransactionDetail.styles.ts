import styled from 'styled-components/native'
import { colors, sizes } from '../Constants';

export const GoBack = styled.TouchableOpacity`
    padding-horizontal: ${sizes.space.large}px;
    padding-top: ${sizes.space.small}px;
    padding-bottom: ${sizes.space.small}px;
    background-color: ${colors.primary}

`;

export const TransactionDetailContainer = styled.View`
    padding-top: ${sizes.space.medium}px;
    flex-direction: row;
    justify-content: space-between;
    padding-horizontal: ${sizes.space.large}px;
`;