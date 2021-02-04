import styled from 'styled-components/native';
import { sizes, colors } from '../../Constants';

export const ActionsContainer = styled.View`
    align-items: center;
    padding-top: ${sizes.space.small}px;
    padding-bottom: ${sizes.space.large}px;
    background-color: ${colors.background};
`;

export const ActionsScrollView = styled.ScrollView`
    width: 100%;
    height: 116px;
`;