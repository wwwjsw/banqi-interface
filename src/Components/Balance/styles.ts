import styled from 'styled-components/native';
import { sizes, colors } from '../../Constants';

export const BalanceContainer = styled.View`
    align-items: center;
    padding-top: ${sizes.space.small}px;
    padding-bottom: ${sizes.space.large}px;
    background-color: ${colors.background};
`;

export const BalanceAmount = styled.View`
    flex-direction: row;
`;