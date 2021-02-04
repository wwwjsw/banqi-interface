import styled from 'styled-components/native'
import { sizes, colors } from '../../Constants';

interface ITransactionItem {
    paddingTop: boolean;
}

export const SeeMoreContainer = styled.TouchableOpacity<ITransactionItem>`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    background-color: ${colors.white};
    padding-horizontal: ${sizes.space.large}px;
    padding-vertical: ${sizes.space.medium}px;
    margin-right: ${(props) => (props.paddingTop ? `${sizes.space.medium}px` : 0)};

`;