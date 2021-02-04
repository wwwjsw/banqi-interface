import styled from 'styled-components/native';
import { sizes, colors } from '../../Constants';

export const HeaderContainer = styled.View`
    background-color: ${colors.background};
    padding-horizontal: ${sizes.space.large}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 56px;
`;