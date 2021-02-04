import styled from 'styled-components/native';
import { sizes, colors } from '../../Constants';

interface IActionsCardContainer {
    marginRightSmall: boolean;
}

export const ActionsCardContainer = styled.View<IActionsCardContainer>`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    elevation: 5;
    border-radius: 4px;
    margin-right: ${(props) => (props.marginRightSmall ? `${sizes.space.small}px` : 0)};
    background-color: ${colors.white}; 
    width: 120px;
    height: 104px;
    justify-content: space-between;
    padding-left: ${sizes.space.medium}px;
    padding-vertical: ${sizes.space.medium}px;
`;