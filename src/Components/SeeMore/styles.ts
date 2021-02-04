import styled from 'styled-components/native'
import { sizes } from '../../Constants';

interface ITransactionItem {
    paddingTop: boolean;
}

export const SeeMoreContainer = styled.TouchableOpacity<ITransactionItem>`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding-horizontal: ${sizes.space.large};
    padding-vertical: ${sizes.space.medium};
    margin-right: ${(props) => (props.paddingTop ? `${sizes.space.medium}px` : 0)};

`;