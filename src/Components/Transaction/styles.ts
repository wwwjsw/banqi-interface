import styled from 'styled-components/native'
import { sizes, colors } from '../../Constants';

interface ITransactionItem {
    paddingTop: boolean;
}

export const TransactionItem = styled.TouchableOpacity<ITransactionItem>`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    margin-right: ${(props) => (props.paddingTop ? `${sizes.space.medium}px` : 0)};

`;

export const TransactionContainerIcon = styled.View`
    height: 60px;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

interface IIconLine {
    transparent: boolean;
}

export const IconLineTop = styled.View<IIconLine>`
    width: 12px;
    height: 2px;
    transform: rotate(90deg);
    background-color: ${(props) => (props.transparent ? 'transparent' : colors.blackLowOpacity)};
`;

export const IconLineDown = styled.View<IIconLine>`
    width: 12px;
    height: 2px;
    transform: rotate(90deg);
    background-color: ${(props) => (props.transparent ? 'transparent' : colors.blackLowOpacity)};
`;

export const TransactionContainerInfo = styled.View`
    justify-content: center;
`;
export const TransactionContainerAmount = styled.View`
    justify-content: center;
`;